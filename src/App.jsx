import Background from "./love.jpg";
import Signature from "./signature.png";
import "./App.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

import Image1 from "./image1.jpg";
import Image2 from "./image2.jpg";
import Image3 from "./image3.jpg";

import { motion } from "framer-motion";

function App() {
  const [line, setLine] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setLine(line + 1);
      }, 2000);
    }
  }, [isVisible]);

  useEffect(() => {
    setTimeout(() => {
      setLine(line + 1);
    }, 3000);
  }, []);

  return (
    <div className="root">
      {
        line > -1 && <TypeAnimation
        sequence={[
          "Kính gửi bé Châu yêu dấu của anh 💖",
          1000, // Waits 1s
          () => {
            setLine(line + 1); // Place optional callbacks anywhere in the array
          },
        ]}
        omitDeletionAnimation={true}
        wrapper="div"
        cursor={false}
        speed={60}
        repeat={0}
        className="text first-line"
      />
      }
      {line > 0 && (
        <TypeAnimation
          sequence={[
            "Anh Trường xin cảm ơn em vì đã ở bên cạnh anh trong thời gian qua, em đã an ủi, động viên anh những lúc anh buồn, khen anh, chúc mừng anh những lúc anh vui, cổ vũ, khích lệ anh để anh có động lực phấn đấu trong mọi việc. Cảm ơn em vì đã là một phần không thể thiếu của anh và của trái tim anh.👄",
            1000, // Waits 1s
            () => {
              setLine(line + 1); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={false}
          speed={60}
          repeat={0}
          className="text"
        />
      )}
      {line > 1 && (
        <TypeAnimation
          sequence={[
            "Hôm nay là ngày Valentine, chúc em có một ngày thật là ấm cúng bên anh, chúc em luôn xinh xắn tràn đầy năng lượng để đạt được mọi mục tiêu mà mình hướng tới, anh sẽ luôn ở bên cạnh em để an ủi, động viên, khích lệ em, và đặc biệt là luôn yêu thương em, che chở và bảo vệ em để em không còn phải lo âu chuyện gì. Khi nào em có chuyện gì dù vui hay buồn, thì cứ kể cho anh nghe nha, hai đứa mình sẽ cùng nhau chia sẻ với nhau để hiểu nhau hơn, nhớ nắm chặt tay anh á nha, hai đứa mình, đặc biệt là anh, sẽ luôn yêu thương em, chúng mình sẽ bên nhau, cùng nhau vượt qua mọi khó khăn, thăng trầm và cùng nhau viết tiếp câu chuyện tình yêu thật là đẹp đẽ này nha em yêu ơi.😘😘",
            1000, // Waits 1s
            () => {
              setLine(line + 1); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={false}
          speed={60}
          repeat={0}
          className="text"
        />
      )}

      {line > 2 && (
        <TypeAnimation
          sequence={[
            "À còn nữa, nhớ dắt anh đi nhà thờ thường xuyên nữa nha hehe, anh sẽ phấn đấu và cố gắng hết mình với mục tiêu dắt lại em vào lễ đường trước Chúa.🤵👰",
            1000, // Waits 1s
            () => {
              setLine(line + 1); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={false}
          speed={60}
          repeat={0}
          className="text"
        />
      )}

      {line > 3 && (
        <TypeAnimation
          sequence={[
            "Yêu bé Châu rất nhiều",
            1000, // Waits 1s
            () => {
              setIsVisible(true);
            },
          ]}
          wrapper="div"
          cursor={false}
          speed={60}
          repeat={0}
          className="text"
        />
      )}

      <motion.div className="image-container" variants={container} initial="hidden" animate={isVisible ? "show" : "hidden"}>
        <motion.img className="image image1" src={Image1} variants={item}></motion.img>
        <motion.img className="image image2" src={Image2} variants={item}></motion.img>
        <motion.img className="image image3" src={Image3} variants={item}></motion.img>
      </motion.div>

      {line > 4 && (
        <TypeAnimation
          sequence={[
            "Anh Trường iu dấu của bé Châu",
            1000, // Waits 1s
            () => {
              setLine(line + 1); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          cursor={false}
speed={60}
          repeat={0}
          className="text last-line"
        />
      )}
      <img className="background" src={Background}></img>
      <motion.img className="signature" src={Signature} initial={{ opacity: 0 }} animate={line > 5 ? { opacity: 1 } : { opacity: 0 }}></motion.img>
    </div>
  );
}

export default App;
