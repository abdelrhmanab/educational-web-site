import React from "react";

const faqList = [
  {
    id: "a",
    question: "What are the different types of course?",
    answer:
      "Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.",
    isOpen: true,
  },
  {
    id: "b",
    question: "What makes Echooling different from other?",
    answer:
      "Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.",
    isOpen: false,
  },
  {
    id: "c",
    question: "What are the main features of Echooling?",
    answer:
      "Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.",
    isOpen: false,
  },
  {
    id: "d",
    question: "How will Echooling help me in the academic?",
    answer:
      "Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.",
    isOpen: false,
  },
];

const FAQ = () => {
  const [openId, setOpenId] = React.useState("a"); // أول واحد مفتوح

  return (
    <div className="flex flex-col gap-4 bg-gray-50 border border-gray-200 px-6 py-12 rounded-b-2xl">
      <h3 className="text-2xl lg:text-4xl font-bold">FAQ</h3>

      {faqList.map((i) => (
        <div
          key={i.id}
          className="collapse collapse-arrow bg-base-100 border border-base-300 p-5 shadow-lg"
        >
          {/* هنا اللوجك */}
          <input
            type="radio"
            name="my-accordion-2"
            checked={openId === i.id}
            onChange={() => setOpenId(i.id)}
          />

          <div className={`collapse-title font-semibold text-2xl ${openId === i.id ?"text-primary":""}`}>
            {i.question}
          </div>

          <div className="collapse-content text-lg ">
            <p className="pt-8">
            {i.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;