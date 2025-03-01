import { useState } from "react";

export default function Picture() {
  const [classes, setClasses] = useState({
    parent: "background background--active",
    child: "picture"
  })
  return (
    <div className={classes.parent}>
      <img
        className={classes.child}
        onClick={() => {
          if(classes.parent.includes("background--active")){
            setClasses({
              parent: "background",
              child: "picture picture--inactive"
            })
          } else {
            setClasses({
              parent: "background background--active",
              child: "picture"
            })
          }
        }}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
