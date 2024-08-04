import AuthCard from "../components/AuthCard";
import AppForm from "../components/AppForm";

const SignInPage: React.FC = () => {
  const userSignIn = (data: any) => {
    console.log(data);
  };
  return (
    <AuthCard title={"Sign In"}>
      <AppForm
        credentialFields={["Email"]}
        authenticationFields={["Password"]}
        submit={userSignIn}
      />
    </AuthCard>
  );
};

export default SignInPage;
