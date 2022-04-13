import FormRender, { useForm } from 'form-render';

export default function OrgType(props) {
  const form = useForm();
  const { setValues } = props.addons;
  setValues({ orgType: form.formData });
  const schema = {
    type: 'object',
    properties: {
      isSelected: {
        title: '选中类型',
        type: 'boolean',
      },
      typeName: {
        type: 'string',
        required: true,
      },
      isJoin: {
        title: '允许加入',
        type: 'boolean',
      },
      selectedType: {
        type: 'array',
        enum: ['a', 'b', 'c'],
        enumNames: ['早', '中', '晚'],
        widget: 'select',
        props: {
          mode: 'multiple',
        },
      },
    },
  };

  return (
    <div {...props}>
      <FormRender form={form} schema={schema} />
    </div>
  );
}
