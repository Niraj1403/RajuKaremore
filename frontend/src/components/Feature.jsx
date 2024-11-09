import React from "react";
import {
  Truck,
  ShoppingBag,
  LifeBuoy,
  RefreshCw,
  Clock,
  CreditCard,
  Shield,
  Gift,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex justify-center mx-4 md:mx-10">
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-200 rounded-full p-3 mb-4">
        <Icon className="w-6 h-6 text-gray-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Feature = () => {
  const features = [
    {
      icon: Truck,
      title: "Infrastructure Development",
      description:
        "Infrastructure development under Raju Karemore's leadership includes the construction of new roads and bridges to improve connectivity in rural and urban areas. Additionally, he has overseen the modernization of public transportation systems, making travel more efficient and accessible for all citizens.",
    },
    {
      icon: ShoppingBag,
      title: "Education",
      description:
        "Raju Karemore might focus on enhancing access to quality education by building new schools and colleges, and supporting students with scholarships and free educational materials.",
    },
    {
      icon: LifeBuoy,
      title: "Health",
      description:
        "Raju Karemore has spearheaded the establishment of state-of-the-art hospitals and health clinics, ensuring accessible and affordable healthcare for all. His initiatives also include organizing regular health camps and launching health insurance schemes for underprivileged communities.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-[#C6318B] text-3xl font-semibold mb-3 text-center">
        Public Service
      </h1>
      <p className="text-center mb-10 px-2 md:px-0">
        Raju Karemore has led transformative public services, focusing on
        building essential infrastructure, improving healthcare access, and
        enhancing educational opportunities in underserved communities. His
        initiatives have significantly uplifted the quality of life, driving
        economic growth and social progress.
      </p>
      {/* Centered text */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Feature;
