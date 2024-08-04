import AuthCard from "../components/AuthCard";
import AppForm from "../components/AppForm";

const SignInPage: React.FC = () => {
  const userSingUp = (data: any) => {
    console.log("fsdsfsdf", data);
  };
  5;
  return (
    <AuthCard title={"Sign In"}>
      <AppForm
        credentialFields={["Email"]}
        authenticationFields={["Password"]}
        submit={userSingUp}
      />
    </AuthCard>
  );
};

export default SignInPage;
