import LoginForm from "@/components/auth/LoginForm";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />    
    </div>
  );
}