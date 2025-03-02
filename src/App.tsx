import { useRef, useState } from "react";

export default function CatFriends() {
  const itemsRef = useRef<Map<string, HTMLLIElement>>(null);
  const [catList, setCatList] = useState(setupCatList);

  function scrollToCat(cat) {
    const map = getMap();
    const node: any = map.get(cat);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function getMap(): Map<string, HTMLLIElement> {
    if (!itemsRef.current) {
      // 처음 사용하는 경우, Map을 초기화합니다.
      itemsRef.current = new Map<string, HTMLLIElement>();
    }
    return itemsRef.current as Map<string, HTMLLIElement>;
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToCat(catList[0])}>Neo</button>
        <button onClick={() => scrollToCat(catList[5])}>Millie</button>
        <button onClick={() => scrollToCat(catList[9])}>Bella</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                console.warn('node', cat, node)
                const map: Map<string, HTMLLIElement> = getMap();
                if (node) {
                  map.set(cat, node);
                } else {
                  map.delete(cat);
                }
              }}
            >
              <img src={cat} alt="test"/>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catList: string[] = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}

