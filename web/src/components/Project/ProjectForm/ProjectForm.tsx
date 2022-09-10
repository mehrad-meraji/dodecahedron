import { useAuth } from "@redwoodjs/auth";
import { Form, FormError, FieldError, TextField } from "@redwoodjs/forms";

import Button from "src/components/Button/Button";

const ProjectForm = (props) => {
  const { currentUser } = useAuth();
  const onSubmit = (data) => {
    props.onSave(data, props?.project?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form
        onSubmit={onSubmit}
        className={"flex flex-col gap-2"}
        error={props.error}
      >
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <TextField name="userID" hidden={true} defaultValue={currentUser.id} />

        <TextField
          name="name"
          defaultValue={props.project?.name}
          placeholder={"Name"}
          className="border !border-ice-300 !bg-ice-800 px-2 py-1 outline-0 focus:!border-royal-400 focus:!bg-royal-900"
        />
        <FieldError name="name" className="rw-field-error" />

        <TextField
          name="description"
          defaultValue={props.project?.description}
          placeholder={"Description (optional)"}
          className="border !border-ice-300 !bg-ice-800 px-2 py-1 text-3xs outline-0 focus:!border-royal-400 focus:!bg-royal-900"
        />
        <FieldError name="description" className="rw-field-error" />

        <footer className="mt-1 flex justify-end gap-1">
          <Button variant="secondary" onClick={props.onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={props.loading}>
            Create Project
          </Button>
        </footer>
      </Form>
    </div>
  );
};

export default ProjectForm;
