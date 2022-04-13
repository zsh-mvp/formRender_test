import Form from 'form-render';
import OrgType from '../OrgType'

export default function FormRender (props) {
  return (
    <Form
      widgets={{
        orgType: OrgType,
      }}
      {...props}
    />
  );
};