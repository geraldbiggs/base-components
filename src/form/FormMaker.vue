<template>
	<div>
		<template
			v-for="field in selectedFields"
			:key="field.name"
		>
			<slot
				:name="'before:' + field.name"
				:update="update"
			/>
			<div>
				<validation-provider
					v-slot="{ errors }"
					tag="div"
					:rules="field.fieldAttrs.rules"
					:name="field.name"
				>
					<template v-if="$slots[field.name]">
						<slot
							:name="field.name"
							:component="field.component"
							:attrs="{
								name: field.name,
								field: field,
								type: field.type,
								rules: field.rules,
								fields: selectedFields,
								value: attrs[field.name],
							}"
							:update="(v) => update(field.name, v)"
						/>
					</template>
					<template v-else>
						<component
							:is="field.component"
							:type="field.type"
							v-bind="field.fieldAttrs"
							:value="attrs[field.name] || (formState && formState[field.name])"
							@input="(v) => update(field.name, v)"
							@focus="(v) => $emit('focus')"
						/>
					</template>
					<q-list
						v-if="errors.length > 0"
						bordered
					>
						<q-item
							v-for="(error, key) in errors"
							:key="key"
							class="error"
						>
							<q-item-section avatar>
								<q-icon
									size="sm"
									name="warning"
									color="error"
									class="text-sm text-red"
								/>
							</q-item-section>
							<q-item-section>
								{{ error }}
							</q-item-section>
						</q-item>
					</q-list>
				</validation-provider>
				<slot
					:name="'after:' + field.name"
					:update="update"
				/>
			</div>
		</template>
	</div>
</template>
<script>
export default {
  name: "FormMaker",
  inheritAttrs: false,
  props: {
    formState: {
      type: Object,
      default: () => {},
    },
    fields: {
      type: Object,
      default: () => {},
    },
    inputs: {
      type: Array,
      default: () => [],
    },
    overrides: {
      type: Object,
      default: () => {},
    },
    useFields: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["input", "focus", "update"],
  computed: {
    selectedFields() {
      let availableInputs = Object.keys(this.fields);

      // let usedFields =
      //   this.inputs.length > 0
      //     ? this.inputs.filter((x) => availableInputs.includes(x))
      //     : availableInputs;

      // let keys = usedFields.filter((key) => {
      //   return this.fieldVisible(this.fields[key]);
      // });

      return availableInputs.reduce((obj, key) => {
        return {
          ...obj,
          [key]: this.fields[key],
        };
      }, {});
    },
    attrs() {
      const { inputs, useFields, fields, ...final } = this.$attrs;
      return final;
    },
  },
  methods: {
    fieldVisible(field) {
      if (field.fieldAttrs.visible === undefined) return true;
      if (
        field.fieldAttrs.visible &&
        typeof field.fieldAttrs.visible === "function"
      )
        return field.fieldAttrs.visible.call(this, this.attrs, field, this);
      return field.fieldAttrs.visible;
    },
    update(name, value) {
      this.$emit("update:" + name, value);
      this.$emit("input", { name, value });
    },
  },
};
</script>
