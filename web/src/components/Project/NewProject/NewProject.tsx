import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { navigate, routes } from "@redwoodjs/router";
import { useMutation } from "@redwoodjs/web";

import Button from "src/components/Button/Button";
import ProjectForm from "src/components/Project/ProjectForm";
import { QUERY } from "src/components/Project/ProjectsCell";
import useToast from "src/hooks/use-toast";

const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProjectMutation($input: CreateProjectInput!) {
    createProject(input: $input) {
      id
    }
  }
`;

const NewProject = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createProject, { loading, error }] = useMutation(
    CREATE_PROJECT_MUTATION,
    {
      onCompleted: () => {
        toast.success("Project created");
        navigate(routes.projects());
      },
      onError: (error) => {
        toast.error(error.message);
      },
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onSave = (input) => {
    createProject({ variables: { input } }).then(() => onClose());
  };

  return (
    <>
      <Button onClick={onOpen}>
        <span className="rw-button-icon">+</span> Create Project
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProjectForm
              onSave={onSave}
              onClose={onClose}
              loading={loading}
              error={error}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewProject;
