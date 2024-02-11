import React from "react";

export default function IntroSection() {
    return (

        <section>
            <h1 className="centred">Result University
            </h1>
            <h3 className="centred" style={{color: "#666"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ducimus mollitia animi sit quasi reiciendis eum quas necessitatibus! Officia pariatur blanditiis voluptatibus ex vero dolorem inventore cupiditate quo iste esse.</h3>
        </section>
    )
}

// export default function IntroSection() {
//   return React.createElement("Section", null, [
//     React.createElement("h1", { className: "centred", key: 1 }, "Result University"),
//     React.createElement(
//       "h3",
//       { className: "centred", style: { color: "#666" }, key: 2  },
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ducimus mollitia animi sit quasi reiciendis eum quas necessitatibus! Officia pariatur blanditiis voluptatibus ex vero dolorem inventore cupiditate quo iste esse."
//     ),
//   ]);
// }
