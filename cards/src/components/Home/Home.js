import React, {useEffect, useState} from "react";
import './Home.css';


const Home = ({data}) => {

    const [activeCards, setActiveCards] = useState(data);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [item, setItem] = useState(null);

    // useEffect(() => {
    //
    //     var dragItem = document.querySelector(".card");
    //     var container = document.querySelector(".container");
    //
    //     var active = false;
    //     var currentX;
    //     var currentY;
    //     var initialX;
    //     var initialY;
    //     var xOffset = 0;
    //     var yOffset = 0;
    //
    //     container.addEventListener("touchstart", dragStart, false);
    //     container.addEventListener("touchend", dragEnd, false);
    //     container.addEventListener("touchmove", drag, false);
    //
    //     container.addEventListener("mousedown", dragStart, false);
    //     container.addEventListener("mouseup", dragEnd, false);
    //     container.addEventListener("mousemove", drag, false);
    //
    //     function dragStart(e) {
    //         if (e.type === "touchstart") {
    //             initialX = e.touches[0].clientX - xOffset;
    //             initialY = e.touches[0].clientY - yOffset;
    //         } else {
    //             initialX = e.clientX - xOffset;
    //             initialY = e.clientY - yOffset;
    //         }
    //
    //         if (e.target === dragItem) {
    //             active = true;
    //         }
    //     }
    //
    //     function dragEnd(e) {
    //         initialX = currentX;
    //         initialY = currentY;
    //
    //         active = false;
    //     }
    //
    //     function drag(e) {
    //         if (active) {
    //
    //             e.preventDefault();
    //
    //             if (e.type === "touchmove") {
    //                 currentX = e.touches[0].clientX - initialX;
    //                 currentY = e.touches[0].clientY - initialY;
    //             } else {
    //                 currentX = e.clientX - initialX;
    //                 currentY = e.clientY - initialY;
    //             }
    //
    //             xOffset = currentX;
    //             yOffset = currentY;
    //
    //             setTranslate(currentX, currentY, dragItem);
    //         }
    //     }
    //
    //     function setTranslate(xPos, yPos, el) {
    //         el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    //     }
    //
    // }, []);

    const onClickNew = () => {
        console.log(activeCards.columns.filter((item) => item.name === 'New'));

        let d = {...activeCards};
        d.columns.filter((item) => item.name === 'New')[0].cards.push({
            title: '33',
            points: '3',
        });
        console.log(d);
        setActiveCards(d);
    };

    console.log('render');

    const onDragStart = (e) => {
        console.log(e.target.className);
        console.log(document.querySelector(".card").className);
        if (e.target.className === document.querySelector(".card").className) {
            console.log(e);
            setItem(e.target);
            setX(e.clientX);
            setY(e.clientY);
        }
    };

    const onDragEnd = (e) => {
        if (item) {
            console.log(e);
            setItem(null);
            setX(0);
            setY(0);
        }
    };

    const onDrag = (e) => {
        e.preventDefault();
        if (item) {
            console.log(e);
            const xPos = e.clientX - x;
            const yPos = e.clientY - y;
            item.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        }

    };

    return (
        <>
            <button onClick={onClickNew}>New</button>
            <div className="container">
                {data.columns.map((item, index) => {
                    return (
                        <div className="column" id={index}>
                            <div className="heading">
                                {item.name}
                            </div>
                            <div className="cards">
                                {item?.cards?.map((item, index) => {
                                    return (
                                        <div className="card"
                                             draggable
                                             onDragStart={onDragStart}
                                             onDragEnd={onDragEnd}
                                             onDrag={onDrag}
                                             onMouseDown={onDragStart}
                                             onMouseMove={onDrag}
                                             onMouseUp={onDragEnd}
                                        >
                                            <div className="title">{item.title}</div>
                                            <div className="points">{item.points}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>)
                })}
            </div>
        </>
    );
};

export default Home;
