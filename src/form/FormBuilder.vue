<template>
	<div>
		<template
			v-for="field in finalFields"
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
								rules: field.fieldAttrs.rules,
								fields: finalFields,
								value: (formData && formData[field.name]) || attrs[field.name],
							}"
							:update="(v) => update(field.name, v)"
						/>
					</template>
					<template v-else>
						<component
							:is="field.component"
							:form-data="attrs"
							:type="field.type"
							v-bind="field.fieldAttrs"
							:value="(formData && formData[field.name]) || attrs[field.name]"
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
  name: "FormBuilder",
  inheritAttrs: false,
  props: {
    formData: {
      type: Object,
      default: () => {},
    },
    formState: {
      type: Object,
      default: () => {},
    },
    fields: {
      type: Array,
      default: () => [],
    },
    input: {
      type: Object,
      default: () => {
        return { empty: true };
      },
    },
    inputs: {
      type: Object,
      default: () => {
        return { empty: true };
      },
    },
    overrides: {
      type: Object,
      default: () => {},
    },
    model: {
      type: String,
      default: null,
    },
    useFields: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["focus", "update-field", "updated-object", "input"],
  computed: {
    // resource() {
    //   // return this.$root.$makeForm(this.model);
    // },
    selectedField() {
      if (this.input.empty) return false;
      let field = this.input;
      if (this.fieldVisible(field)) {
        return { [field.name]: field };
      } else {
        return {};
      }
    },
    finalFields() {
      return !this.input.empty ? this.selectedField : this.selectedFields;
    },
    selectedFields() {
      if (this.inputs.empty) return false;
      // let { inputs, model } = this.resource;

      // let availableInputs = Object.keys(inputs.value);

      // let usedFields =
      //   this.inputs.length > 0
      //     ? this.inputs.filter((x) => availableInputs.includes(x))
      //     : availableInputs;

      // if (this.overrides) {
      //   let overrideKeys = Object.keys(this.overrides);

      //   if (overrideKeys) {
      //     overrideKeys.forEach((x) => {
      //       if (this.overrides[x].fieldType)
      //         model.modifyFieldType(x, this.overrides[x]);
      //       model.modifyAttrs(x, this.overrides[x].overrides);
      //     });
      //   }
      // }

      let usedFields = Object.keys(this.inputs);

      let keys = usedFields.filter((key) => {
        return this.fieldVisible(this.inputs[key]);
      });

      return keys.reduce((obj, key) => {
        return {
          ...obj,
          [key]: this.inputs[key],
        };
      }, {});

      // let keys = usedFields.filter((key) => {
      //   return this.fieldVisible(inputs.value[key]);
      // });

      // return keys.reduce((obj, key) => {
      //   return {
      //     ...obj,
      //     [key]: inputs.value[key],
      //   };
      // }, {});
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
      ) {
        return field.fieldAttrs.visible.call(this, this.formData);
      }
      return field.fieldAttrs.visible;
    },
    update(name, value) {
      this.$emit("update:" + name, value);
      this.$emit("update-field", { name, value });
      this.$emit("updated-object", {
        ...this.formData,
        ...{
          [name]: value,
        },
      });
      this.$emit("input", { name, value });
    },
  },
};
</script>
