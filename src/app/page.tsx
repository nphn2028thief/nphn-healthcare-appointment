import PatientForm from "@/components/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-screen overflow-hidden">
      <section className="h-screen remove-scrollbar container my-auto overflow-auto">
        <div className="max-w-[496px] sub-container">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-fit h-10 mb-12"
            loading="lazy"
          />

          <PatientForm />

          <div className="flex justify-between mt-14 pb-10 text-sm">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            <Link href={"/?admin=true"} className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src={"/assets/images/onboarding-img.png"}
        alt="onboarding"
        width={1000}
        height={1000}
        className="max-w-[50%] min-h-screen hidden lg:block object-cover rounded-tl-3xl rounded-bl-3xl"
        objectFit="cover"
        loading="lazy"
      />
    </main>
  );
}
