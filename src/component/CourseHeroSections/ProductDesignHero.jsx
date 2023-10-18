import CourseHeroSect from "./CourseHeroSect";

import "./CourseHeroSect.scss";

const sectionData = [
  {
    id: 2,
    title: "UI/UX Design and Prototyping (Product Design)",
    text: "User Interface(UI) and User Experience(UX) design are in great demand and are applicable across products and industry domains. With customer experience being the centerfold of product marketing, companies are focusing on enhancing the interface that their customers have access to.",
    button1: "Apply Now",
    button2: "Speak To A Learning Advisor",
    headline: "Applications are currently Open!",
    img: require("../../assets/ProductHero.png"),
  },
];

const ProductDesignHero = () => {
  return (
    <section className="course" id="course">
      <>
        <div>
          {sectionData.map(
            ({ title, text, button1, button2, headline, id, img }) => (
              <CourseHeroSect
                key={id}
                title={title}
                text={text}
                button1={button1}
                button2={button2}
                headline={headline}
                img={img}
              />
            )
          )}
        </div>
      </>
    </section>
  );
};

export default ProductDesignHero;
