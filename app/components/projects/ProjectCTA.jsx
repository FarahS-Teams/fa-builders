import Cta from "../Cta";

export default function ProjectCTA() {
  return (
    <section className="bg-[#ff9326] text-black py-16 text-center">
      <h2 className="text-3xl font-bold">Ready to Build With Us?</h2>
      <p className="mt-2">Let’s discuss your next project.</p>

      <div className="mt-6">
        <Cta text="Contact Us" path="/contact" />
      </div>
    </section>
  );
}
