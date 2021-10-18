import styled from "styled-components";

const StyledErrorMessage = styled.div`
  color: red;
`;

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <StyledErrorMessage>{message}</StyledErrorMessage>
);

export default ErrorMessage;
