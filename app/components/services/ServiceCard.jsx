import FadeInSection from "../common/FadeInSection";

export default function ServiceCard({ title, description, image, delay }) {
  return (
    <FadeInSection delay={delay}>
      <div className="text-center flex flex-col items-center">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-[330px] sm:w-[370px] md:w-[370px] lg:w-[370px] xl:w-[370px] aspect-square object-cover rounded-full mb-8 shadow-md"
        />

        {/* Title */}
        <h3 className="text-xl font-lora font-medium text-[#2a2a2a] mb-4">
          {title}
        </h3>

        {/* Description */}
        <FadeInSection delay={delay + 0.05}>
          <p className="text-[#6b6b6b] text-[16px] font-light leading-relaxed max-w-sm">
            {description}
          </p>
        </FadeInSection>
      </div>
    </FadeInSection>
  );
}
