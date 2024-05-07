"use client"
import React from "react";
import { Typography, TypographyProps , Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

type FAQ = {
  title: string;
  desc: string;
};

const FAQS: FAQ[] = [
  {
    title: "How can I donate to Flora Fauna Foundation?",
    desc: "Donating to Flora Fauna Foundation is easy! You can make a secure online donation through our website by clicking on the \"Donate\" button. We also accept donations via check or bank transfer. Your generosity helps us provide essential care and support to animals in need.",
  },
  {
    title: "Do you have volunteer opportunities available?",
    desc: "Yes, we welcome volunteers who are passionate about animal welfare! Whether you have experience working with animals or want to lend a hand at events, there are plenty of ways to get involved. Visit our \"Volunteer\" page to learn more about current opportunities and how to sign up.",
  },
  {
    title: "Can I adopt a pet from Flora Fauna Foundation?",
    desc: "Absolutely! We have many lovable animals waiting for their forever homes. Visit our \"Adopt\" page to view our available pets and learn more about our adoption process. Our team will guide you through every step to ensure a successful match between you and your new furry friend.",
  },
  {
    title: "How can I stay updated on Flora Fauna Foundation's activities and events?",
    desc: "To stay informed about our latest news, events, and initiatives, follow us on social media platforms such as Facebook, Instagram, and Twitter. You can also subscribe to our newsletter to receive regular updates delivered straight to your inbox.",
  },
  {
    title: "Does Flora Fauna Foundation offer educational programs for schools and community groups?",
    desc: "Yes, we believe in the power of education to inspire compassion and empathy towards animals. We offer educational programs and workshops tailored for schools, community groups, and youth organizations. Contact us to learn more about scheduling a presentation or workshop for your group.",
  },
];

function Faq() {
  const [open, setOpen] = React.useState<number | null>(null);

  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value);
  };

  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map((faq, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left text-gray-900">
                {faq.title}
              </AccordionHeader>
              <AccordionBody>
                <Typography variant="body1" color="blue-gray" className="font-normal text-gray-500">
                  {faq.desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
