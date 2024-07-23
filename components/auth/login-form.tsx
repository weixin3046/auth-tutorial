import CardWrapper from "@/components/auth/card-wrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLaberl="Welcome back"
      backButtonLaberl="Don't have an acount"
      backButtonHref="/auth/register"
      showSocial
    >
      <div>login form</div>
    </CardWrapper>
  );
}
