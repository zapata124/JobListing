import AuthCard from "../components/AuthCard";
import AppForm from "../components/AppForm";

const SignUpPage: React.FC = () => {
  const userSingUp = (data: any) => {
    console.log(data);
  };
  return (
    <AuthCard title={"Sign Up"}>
      <AppForm
        credentialFields={["First Name", "Last Name", "Email"]}
        authenticationFields={["Password", "Confirm Password"]}
        submit={userSingUp}
      />
    </AuthCard>
  );
};

export default SignUpPage;
