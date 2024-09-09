"use client";
import lightning from "./images/lightning.svg";
import pin from "./images/pin.svg";
import search from "./images/search.svg";
import { useEffect, useState } from "react";
import backgroundTop from "./images/background-top.png";
import Image from "next/image";
import SelectComponent from "./components/Select";
import Popup from "./components/Popup";
export default function GamePage() {
  const [popupOpen, setPopupOpen] = useState(false);
  useEffect(() => {
    if (popupOpen) {
      document.querySelector("main")?.classList.add("popup-open");
    } else document.querySelector("main")?.classList.remove("popup-open");
  }, [popupOpen]);

  const FormatAccountAge = (ageDays: number) => {
    if (ageDays < 7) {
      if (ageDays == 1) return ageDays + " день";
      if (ageDays <= 4) return ageDays + " дня";
      return ageDays + " дней";
    }
    if (ageDays < 30) {
      const weeks = Math.floor(ageDays / 7);
      if (weeks == 1) return weeks + " неделю";
      return weeks + "недели";
    }
    if (ageDays < 365) {
      const months = Math.floor(ageDays / 30);
      if (months == 1) return months + " месяц";
      if (months <= 4) return months + " месяца";
      return months + " месяцев";
    }
    const years = Math.floor(ageDays / 365);
    if (years == 1) return years + " год";
    if (years <= 4) return years + " года";
    return years + " лет";
  };
  const FormatReviewsText = (count: number) => {
    if (count % 10 == 1 && count != 11) return count + " отзыв";
    if (count % 10 > 0 && count % 10 <= 4 && (count < 11 || count > 14))
      return count + " отзыва";
    return count + " отзывов";
  };
  const StarsBlock = ({ rating }: { rating: number }) => {
    const colorClass =
      rating < 3
        ? "rating--red"
        : rating < 4
        ? "rating--orange"
        : rating < 5
        ? "rating--yellow"
        : "rating--green";

    return (
      <>
        <div className={"rating-block " + colorClass}>
          <p>{rating.toFixed(1)}</p>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.32279 0.887954C6.11862 0.790604 5.88141 0.790604 5.67723 0.887954C5.50072 0.972112 5.4034 1.11823 5.35433 1.19839C5.30359 1.28126 5.25151 1.38682 5.20075 1.48972L4.12288 3.67336L1.71185 4.02577C1.59836 4.04233 1.48191 4.05933 1.38745 4.08204C1.29607 4.10402 1.12711 4.15154 0.992657 4.29346C0.837112 4.45765 0.76396 4.68325 0.793571 4.90747C0.819166 5.10129 0.928088 5.23891 0.989188 5.31033C1.05235 5.38415 1.13667 5.46625 1.21885 5.54626L2.96275 7.24481L2.55127 9.64395C2.53184 9.75707 2.51192 9.87312 2.50424 9.97001C2.49682 10.0637 2.48965 10.2392 2.583 10.411C2.69098 10.6098 2.88292 10.7492 3.10535 10.7905C3.29766 10.8261 3.4623 10.7651 3.54912 10.729C3.63889 10.6918 3.7431 10.637 3.84468 10.5835L6.00001 9.45005L8.15535 10.5835C8.25693 10.637 8.36114 10.6918 8.45091 10.729C8.53773 10.7651 8.70237 10.8261 8.89467 10.7905C9.11711 10.7492 9.30904 10.6098 9.41702 10.411C9.51037 10.2392 9.5032 10.0637 9.49578 9.97001C9.48811 9.87312 9.46818 9.75708 9.44876 9.64397L9.03727 7.24481L10.7812 5.54624C10.8634 5.46623 10.9477 5.38414 11.0108 5.31033C11.0719 5.23891 11.1809 5.10129 11.2065 4.90747C11.2361 4.68325 11.1629 4.45765 11.0074 4.29346C10.8729 4.15154 10.704 4.10402 10.6126 4.08204C10.5181 4.05933 10.4017 4.04233 10.2882 4.02577L7.87714 3.67336L6.7993 1.48976C6.74853 1.38686 6.69644 1.28127 6.6457 1.19839C6.59662 1.11823 6.4993 0.972112 6.32279 0.887954Z"
              fill="#FF8E26"
            />
          </svg>
        </div>
      </>
    );
  };
  interface goodsType {
    desc: string;
    seller: {
      username: string;
      avatar: string;
      rating: number;
      isOnline: boolean;
      account_age_days: number;
      feedback_amount: number;
    };
    in_stock: number | string;
    price: number;
    isPinned: boolean;
    isInstant: boolean;
  }
  const [goodsList] = useState<goodsType[]>([
    {
      desc: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        username: "0xHearts.com",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 4.9,
        isOnline: true,
        account_age_days: 1100,
        feedback_amount: 4288,
      },
      in_stock: 322,
      price: 0.63,
      isPinned: false,
      isInstant: true,
    },
    {
      desc: "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
      seller: {
        username: "IgorDun4enkoff",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 2.0,
        isOnline: true,
        account_age_days: 800,
        feedback_amount: 45,
      },
      in_stock: "∞",
      price: 0.63,
      isPinned: false,
      isInstant: true,
    },

    {
      desc: "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 1.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 4556,
      price: 0.6,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
      seller: {
        username: "Dendi",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 5.0,
        isOnline: false,
        account_age_days: 2,
        feedback_amount: 4,
      },
      in_stock: 15666,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 3.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 104242,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        username: "0xHearts.com",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 4.9,
        isOnline: true,
        account_age_days: 1100,
        feedback_amount: 4288,
      },
      in_stock: 322,
      price: 0.64,
      isPinned: false,
      isInstant: true,
    },
    {
      desc: "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
      seller: {
        username: "IgorDun4enkoff",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 2.0,
        isOnline: true,
        account_age_days: 800,
        feedback_amount: 45,
      },
      in_stock: "∞",
      price: 0.63,
      isPinned: false,
      isInstant: false,
    },

    {
      desc: "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 1.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 4556,
      price: 0.6,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
      seller: {
        username: "Dendi",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 5.0,
        isOnline: false,
        account_age_days: 2,
        feedback_amount: 4,
      },
      in_stock: 15666,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 3.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 104242,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        username: "0xHearts.com",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 4.9,
        isOnline: true,
        account_age_days: 1100,
        feedback_amount: 4288,
      },
      in_stock: 322,
      price: 0.64,
      isPinned: false,
      isInstant: true,
    },
    {
      desc: "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
      seller: {
        username: "IgorDun4enkoff",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 2.0,
        isOnline: true,
        account_age_days: 800,
        feedback_amount: 45,
      },
      in_stock: "∞",
      price: 0.63,
      isPinned: false,
      isInstant: false,
    },

    {
      desc: "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 1.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 4556,
      price: 0.6,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
      seller: {
        username: "Dendi",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 5.0,
        isOnline: false,
        account_age_days: 2,
        feedback_amount: 4,
      },
      in_stock: 15666,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 3.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 104242,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        username: "0xHearts.com",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 4.9,
        isOnline: true,
        account_age_days: 1100,
        feedback_amount: 4288,
      },
      in_stock: 322,
      price: 0.64,
      isPinned: false,
      isInstant: true,
    },
    {
      desc: "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
      seller: {
        username: "IgorDun4enkoff",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 2.0,
        isOnline: true,
        account_age_days: 800,
        feedback_amount: 45,
      },
      in_stock: "∞",
      price: 0.63,
      isPinned: false,
      isInstant: false,
    },

    {
      desc: "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 1.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 4556,
      price: 0.6,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
      seller: {
        username: "Dendi",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 5.0,
        isOnline: false,
        account_age_days: 2,
        feedback_amount: 4,
      },
      in_stock: 15666,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 3.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 104242,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        username: "0xHearts.com",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 4.9,
        isOnline: true,
        account_age_days: 1100,
        feedback_amount: 4288,
      },
      in_stock: 322,
      price: 0.64,
      isPinned: true,
      isInstant: true,
    },
    {
      desc: "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
      seller: {
        username: "IgorDun4enkoff",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 2.0,
        isOnline: true,
        account_age_days: 800,
        feedback_amount: 45,
      },
      in_stock: "∞",
      price: 0.63,
      isPinned: false,
      isInstant: false,
    },

    {
      desc: "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 1.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 4556,
      price: 0.6,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
      seller: {
        username: "Dendi",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 5.0,
        isOnline: false,
        account_age_days: 2,
        feedback_amount: 4,
      },
      in_stock: 15666,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 3.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 104242,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        username: "0xHearts.com",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 4.9,
        isOnline: true,
        account_age_days: 1100,
        feedback_amount: 4288,
      },
      in_stock: 322,
      price: 0.64,
      isPinned: true,
      isInstant: true,
    },
    {
      desc: "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
      seller: {
        username: "IgorDun4enkoff",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 2.0,
        isOnline: true,
        account_age_days: 800,
        feedback_amount: 45,
      },
      in_stock: "∞",
      price: 0.63,
      isPinned: false,
      isInstant: false,
    },

    {
      desc: "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 1.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 4556,
      price: 0.6,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
      seller: {
        username: "Dendi",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 5.0,
        isOnline: false,
        account_age_days: 2,
        feedback_amount: 4,
      },
      in_stock: 15666,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 3.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 104242,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
      seller: {
        username: "0xHearts.com",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 4.9,
        isOnline: true,
        account_age_days: 1100,
        feedback_amount: 4288,
      },
      in_stock: 322,
      price: 0.64,
      isPinned: true,
      isInstant: true,
    },
    {
      desc: "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
      seller: {
        username: "IgorDun4enkoff",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 2.0,
        isOnline: true,
        account_age_days: 800,
        feedback_amount: 45,
      },
      in_stock: "∞",
      price: 0.63,
      isPinned: false,
      isInstant: false,
    },

    {
      desc: "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 1.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 4556,
      price: 0.6,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
      seller: {
        username: "Dendi",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 5.0,
        isOnline: false,
        account_age_days: 2,
        feedback_amount: 4,
      },
      in_stock: 15666,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
    {
      desc: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
      seller: {
        username: "qewbie",
        avatar:
          "https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj",
        rating: 3.0,
        isOnline: false,
        account_age_days: 1800,
        feedback_amount: 4,
      },
      in_stock: 104242,
      price: 0.55,
      isPinned: false,
      isInstant: false,
    },
  ]);
  const [filterData, setFilterData] = useState({
    category: 0,
    type: 0,
    limitItems: 15,
    orderPriority: 0,
    quantityOrderDec: false,
    priceOrderDec: false,

    onlyOnline: false,
    deliveryType: undefined,
    onlyInstantDelivery: false,
    search: "",
  });

  const filteredGoodsList = goodsList
    .filter((e) => {
      if (
        !e.desc.toLowerCase().includes(filterData.search.toLowerCase().trim())
      )
        return false;
      if (filterData.onlyInstantDelivery) {
        if (!e.isInstant) return false;
      }
      if (filterData.onlyOnline) {
        if (!e.seller.isOnline) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (filterData.orderPriority == 0) {
        if (a.isPinned && !b.isPinned) return -1;
        if (b.isPinned && !a.isPinned) return 1;
      }

      if (filterData.orderPriority == 0) return 1;
      console.log(filterData.orderPriority);
      if (filterData.orderPriority == 1) {
        var stock1 = a.in_stock;
        if (stock1 == "∞") stock1 = 999999999;
        var stock2 = b.in_stock;
        if (stock2 == "∞") stock2 = 999999999;
        stock1 = Number(stock1?.toString());
        stock2 = Number(stock2?.toString());
        if (stock1 == stock2) {
          if (filterData.priceOrderDec) return a.price - b.price;

          return b.price - a.price;
        }
        if (filterData.quantityOrderDec) return stock1 - stock2;
        return stock2 - stock1;
      }
      if (filterData.orderPriority == 2) {
        if (filterData.priceOrderDec) return a.price - b.price;

        return b.price - a.price;
      }
      return 1;
    });

  const [categories] = useState([
    {
      label: "Робуксы",
      amount: 395,
    },
    {
      label: "Подарочные карты",
      amount: 1193,
    },
    {
      label: "Донат робуксов (паки)",
      amount: 777,
    },
    {
      label: "Premium",
      amount: 1193,
    },
    {
      label: "VIP-сервер",
      amount: 395,
    },
    {
      label: "Аккаунты",
      amount: 1193,
    },
    {
      label: "Скины",
      amount: 777,
    },
    {
      label: "Prime Gaming",
      amount: 395,
    },
    {
      label: "Studio",
      amount: 395,
    },
    {
      label: "Прочее",
      amount: 395,
    },
    {
      label: "Adopt Me",
      amount: 395,
    },
    {
      label: "Anime Defenders",
      amount: 395,
    },
    {
      label: "Arm Wrestle Simulator",
      amount: 395,
    },
    {
      label: "ASTD",
      amount: 395,
    },
    {
      label: "Blade Ball",
      amount: 395,
    },
    {
      label: "Blox Fruits",
      amount: 395,
    },
    {
      label: "Da Hood",
      amount: 395,
    },
    {
      label: "GPO",
      amount: 395,
    },
    {
      label: "Jailbreak",
      amount: 395,
    },
    {
      label: "Jujutsu Shenanigans",
      amount: 395,
    },
    {
      label: "King Legacy",
      amount: 395,
    },
    {
      label: "MM2",
      amount: 395,
    },
    {
      label: "Pet Simulator 99",
      amount: 395,
    },
    {
      label: "Pet Simulator X",
      amount: 395,
    },
    {
      label: "Project Slayers",
      amount: 395,
    },
    {
      label: "Toilet Tower Defense",
      amount: 395,
    },
    {
      label: "YBA",
      amount: 395,
    },
    {
      label: "Прочие игры",
      amount: 395,
    },
  ]);
  const [selectedType, setSelectedType] = useState(0);
  const [types] = useState([
    "Все",
    "Бели",
    "Аккаунты",
    "Предметы",
    "VIP-сервер",
    "Услуги",
    "Гайды",
  ]);
  return (
    <>
      <div className="game-page">
        <div className="game-page__top">
          <Image
            className="absolute"
            style={{
              top: 0,
              right: 0,
              width: 418,
              height: 414,
            }}
            src={backgroundTop}
            alt=""
          />

          <h2>Робуксы Roblox</h2>

          <p className="normal">
            Какой-то длинный текст, связанный с SEO-оптимизацией относительно
            данной категории, на которую вы сейчас смотрите. Какой-то длинный
            текст, связанный с SEO-оптимизацией относительно данной категории,
            на которую вы сейчас смотрите.{" "}
          </p>
          <div className="categories-list">
            {" "}
            {categories.map((e, i) => (
              <button
                onClick={() => {
                  setFilterData({ ...filterData, category: i });
                }}
                className={
                  "thin-button button" +
                  (filterData.category == i ? " sel" : "")
                }
              >
                {e.label}
                <span className="small">{e.amount}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="game-page__filters">
          <div className="game-page__filters__left">
            <div className="filters-list">
              {" "}
              {types.map((e, i) => (
                <button
                  onClick={() => {
                    setFilterData({ ...filterData, type: i });
                  }}
                  className={
                    "thin-button high-button button " +
                    (filterData.type == i ? " sel" : "")
                  }
                >
                  {e}
                </button>
              ))}
            </div>
            <SelectComponent
              callback={(value) => {
                setFilterData({ ...filterData, deliveryType: value });
              }}
              title={"Способ доставки"}
              values={[{ title: "Быстро" }, { title: "Медленно" }]}
            />
            <label className="toggle">
              <p>Только продавцы онлайн</p>
              <input
                checked={filterData.onlyOnline}
                onChange={(e) => {
                  setFilterData({
                    ...filterData,
                    onlyOnline: e.target.checked,
                  });
                }}
                type="checkbox"
                name=""
                id=""
              />
              <span>
                <div></div>
              </span>
            </label>
            <label className="toggle">
              <Image alt="" src={lightning} />
              <p>Моментальная доставка</p>
              <input
                checked={filterData.onlyInstantDelivery}
                onChange={(e) => {
                  setFilterData({
                    ...filterData,
                    onlyInstantDelivery: e.target.checked,
                  });
                }}
                type="checkbox"
                name=""
                id=""
              />
              <span>
                <div></div>
              </span>
            </label>
            <div className="search">
              <input
                value={filterData.search}
                onChange={(e) => {
                  setFilterData({ ...filterData, search: e.target.value });
                }}
                placeholder="Поиск по описанию лота..."
                type="text"
              />
              <Image src={search} alt="" />
            </div>
          </div>
          <div className="game-page__filters__right">
            <button
              onClick={() => {
                setPopupOpen(true);
              }}
              className="primary-button button"
            >
              Продать Blox Fruits
            </button>
          </div>
        </div>
        <div className="game-page__items">
          <div className="game-page__items__header">
            <div>
              <p>Описание</p>
            </div>
            <div>
              <p>Продавец</p>
            </div>
            <div
              onClick={() => {
                setFilterData({
                  ...filterData,
                  quantityOrderDec: !filterData.quantityOrderDec,
                  orderPriority: 1,
                });
              }}
            >
              <p>Наличие</p>
              <button>
                {filterData.orderPriority != 1 ? (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.93137 5C3.32555 5 3.02265 5 2.88238 4.8802C2.76068 4.77626 2.69609 4.62033 2.70865 4.46077C2.72312 4.27688 2.93731 4.06269 3.36569 3.63431L5.43431 1.56569C5.63232 1.36768 5.73133 1.26867 5.84549 1.23158C5.94591 1.19895 6.05409 1.19895 6.15451 1.23158C6.26867 1.26867 6.36768 1.36768 6.56569 1.56569L8.63432 3.63432C9.06269 4.06269 9.27688 4.27688 9.29135 4.46077C9.30391 4.62033 9.23932 4.77626 9.11762 4.8802C8.97735 5 8.67445 5 8.06863 5H3.93137Z"
                      fill="#6E7076"
                    />
                    <path
                      d="M3.93137 7C3.32555 7 3.02265 7 2.88238 7.1198C2.76068 7.22374 2.69609 7.37967 2.70865 7.53923C2.72312 7.72312 2.93731 7.93731 3.36569 8.36569L5.43431 10.4343C5.63232 10.6323 5.73133 10.7313 5.84549 10.7684C5.94591 10.8011 6.05409 10.8011 6.15451 10.7684C6.26867 10.7313 6.36768 10.6323 6.56569 10.4343L8.63432 8.36568C9.06269 7.93731 9.27688 7.72312 9.29135 7.53923C9.30391 7.37967 9.23932 7.22374 9.11762 7.1198C8.97735 7 8.67445 7 8.06863 7H3.93137Z"
                      fill="#6E7076"
                    />
                  </svg>
                ) : !filterData.quantityOrderDec ? (
                  <svg
                    width="8"
                    height="4"
                    viewBox="0 0 8 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.93137 0C1.32555 0 1.02265 0 0.882383 0.119797C0.760678 0.223743 0.696091 0.37967 0.708648 0.53923C0.723121 0.723121 0.937309 0.937309 1.36569 1.36569L3.43431 3.43431C3.63232 3.63232 3.73133 3.73133 3.84549 3.76842C3.94591 3.80105 4.05409 3.80105 4.15451 3.76842C4.26867 3.73133 4.36768 3.63232 4.56569 3.43431L6.63432 1.36568C7.06269 0.937309 7.27688 0.723121 7.29135 0.53923C7.30391 0.37967 7.23932 0.223743 7.11762 0.119797C6.97735 0 6.67445 0 6.06863 0H1.93137Z"
                      fill="#6E7076"
                    />
                  </svg>
                ) : (
                  <svg
                    style={{ transform: "rotate(180deg)" }}
                    width={8}
                    height={4}
                    viewBox="0 0 8 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.93137 0C1.32555 0 1.02265 0 0.882383 0.119797C0.760678 0.223743 0.696091 0.37967 0.708648 0.53923C0.723121 0.723121 0.937309 0.937309 1.36569 1.36569L3.43431 3.43431C3.63232 3.63232 3.73133 3.73133 3.84549 3.76842C3.94591 3.80105 4.05409 3.80105 4.15451 3.76842C4.26867 3.73133 4.36768 3.63232 4.56569 3.43431L6.63432 1.36568C7.06269 0.937309 7.27688 0.723121 7.29135 0.53923C7.30391 0.37967 7.23932 0.223743 7.11762 0.119797C6.97735 0 6.67445 0 6.06863 0H1.93137Z"
                      fill="#6E7076"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              onClick={() => {
                setFilterData({
                  ...filterData,
                  priceOrderDec: !filterData.priceOrderDec,
                  orderPriority: 2,
                });
              }}
            >
              <p>Цена</p>
              <button>
                {filterData.orderPriority != 2 ? (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.93137 5C3.32555 5 3.02265 5 2.88238 4.8802C2.76068 4.77626 2.69609 4.62033 2.70865 4.46077C2.72312 4.27688 2.93731 4.06269 3.36569 3.63431L5.43431 1.56569C5.63232 1.36768 5.73133 1.26867 5.84549 1.23158C5.94591 1.19895 6.05409 1.19895 6.15451 1.23158C6.26867 1.26867 6.36768 1.36768 6.56569 1.56569L8.63432 3.63432C9.06269 4.06269 9.27688 4.27688 9.29135 4.46077C9.30391 4.62033 9.23932 4.77626 9.11762 4.8802C8.97735 5 8.67445 5 8.06863 5H3.93137Z"
                      fill="#6E7076"
                    />
                    <path
                      d="M3.93137 7C3.32555 7 3.02265 7 2.88238 7.1198C2.76068 7.22374 2.69609 7.37967 2.70865 7.53923C2.72312 7.72312 2.93731 7.93731 3.36569 8.36569L5.43431 10.4343C5.63232 10.6323 5.73133 10.7313 5.84549 10.7684C5.94591 10.8011 6.05409 10.8011 6.15451 10.7684C6.26867 10.7313 6.36768 10.6323 6.56569 10.4343L8.63432 8.36568C9.06269 7.93731 9.27688 7.72312 9.29135 7.53923C9.30391 7.37967 9.23932 7.22374 9.11762 7.1198C8.97735 7 8.67445 7 8.06863 7H3.93137Z"
                      fill="#6E7076"
                    />
                  </svg>
                ) : !filterData.priceOrderDec ? (
                  <svg
                    width="8"
                    height="4"
                    viewBox="0 0 8 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.93137 0C1.32555 0 1.02265 0 0.882383 0.119797C0.760678 0.223743 0.696091 0.37967 0.708648 0.53923C0.723121 0.723121 0.937309 0.937309 1.36569 1.36569L3.43431 3.43431C3.63232 3.63232 3.73133 3.73133 3.84549 3.76842C3.94591 3.80105 4.05409 3.80105 4.15451 3.76842C4.26867 3.73133 4.36768 3.63232 4.56569 3.43431L6.63432 1.36568C7.06269 0.937309 7.27688 0.723121 7.29135 0.53923C7.30391 0.37967 7.23932 0.223743 7.11762 0.119797C6.97735 0 6.67445 0 6.06863 0H1.93137Z"
                      fill="#6E7076"
                    />
                  </svg>
                ) : (
                  <svg
                    style={{ transform: "rotate(180deg)" }}
                    width={8}
                    height={4}
                    viewBox="0 0 8 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.93137 0C1.32555 0 1.02265 0 0.882383 0.119797C0.760678 0.223743 0.696091 0.37967 0.708648 0.53923C0.723121 0.723121 0.937309 0.937309 1.36569 1.36569L3.43431 3.43431C3.63232 3.63232 3.73133 3.73133 3.84549 3.76842C3.94591 3.80105 4.05409 3.80105 4.15451 3.76842C4.26867 3.73133 4.36768 3.63232 4.56569 3.43431L6.63432 1.36568C7.06269 0.937309 7.27688 0.723121 7.29135 0.53923C7.30391 0.37967 7.23932 0.223743 7.11762 0.119797C6.97735 0 6.67445 0 6.06863 0H1.93137Z"
                      fill="#6E7076"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="game-page__items__list">
            {filteredGoodsList.length == 0 ? (
              <div className="not_found">
                <p>Нет активных предложений</p>
              </div>
            ) : (
              filteredGoodsList.slice(0, filterData.limitItems).map((e) => (
                <a>
                  <div>
                    <p> {e.desc} </p>
                  </div>
                  <div>
                    <div>
                      <img
                        src={e.seller.avatar}
                        alt=""
                        width={28}
                        height={28}
                      />
                      <span
                        className={e.seller.isOnline ? "online" : ""}
                      ></span>
                    </div>
                    <section>
                      <div>
                        <h4>{e.seller.username}</h4>
                        <StarsBlock rating={e.seller.rating} />
                      </div>
                      <span>
                        {FormatAccountAge(e.seller.account_age_days)} на сайте,{" "}
                        {FormatReviewsText(e.seller.feedback_amount)}{" "}
                      </span>
                    </section>
                  </div>
                  <div>
                    <p>{e.in_stock}</p>
                  </div>
                  <div>
                    <h6>{e.price} ₽</h6>
                    <nav>
                      {e.isPinned && <Image src={pin} alt="" />}
                      {e.isInstant && <Image src={lightning} alt="" />}
                    </nav>
                    <div></div>
                  </div>
                </a>
              ))
            )}
          </div>
          {filterData.limitItems < filteredGoodsList.length && (
            <button
              className="button white-button"
              onClick={() => {
                setFilterData({
                  ...filterData,
                  limitItems: filterData.limitItems + 10,
                });
              }}
            >
              Показать больше предложений
            </button>
          )}
        </div>
        <div className="game-page__bottom">
          <p>
            Робуксы — это валюта платформы мини игр Roblox, обеспечивающая
            комфортный геймплей и расширенные возможности для игрока. Что
            естественно притягивает толпы желающих их приобрести. Сделать это
            безопасно и без переплат лучше всего на проверенной площадке,
            которой и является биржа игровых ценностей FunPay. Мы обеспечиваем
            комфортные условия для торговли робуксами Roblox без посредников,
            поэтому на нашей торговой площадке всегда присутствует:
            <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
              <li>
                Безопасность сделок. Они проходят в три этапа: оплата, получение
                игровой валюты, подтверждение выполнения заказа.
              </li>
              <li>
                Реальный рыночный курс робуксов. Формируется в условиях
                естественной конкуренции между продавцами.
              </li>
              <li>
                Быстрое оформление заказов. Всего за несколько кликов, с оплатой
                любым удобным для вас способом.
              </li>
            </ul>
            Если же у вас возникнут вопросы, то служба поддержки FunPay ответит
            на них в любое время суток!
          </p>
          <h4>Как купить</h4>
          <p>
            Покупка робуксов осуществляется просто, как мы писали выше, нужно
            сделать всего три действия:
            <ul style={{ listStyleType: "decimal", paddingLeft: 20 }}>
              <li>
                Выбрать предложение, кликнув на него, и находясь на странице
                оформления заказа, связаться с продавцом.
              </li>
              <li>Оплатить заказ на нужное количество робуксов.</li>
              <li>
                Получить игровую валюту RBX и подтвердить выполнение заказа.
                После можно оставить отзыв продавцу и оценить его работу.
                Продавец получит ваши деньги только после того, как вы получите
                робуксы в Roblox и отправите системе подтверждение о выполнении
                заказа.
              </li>
            </ul>
          </p>
          <h4>Продавцам</h4>
          <p>
            Если вы опытный продавец или начинаете свой путь с нуля — неважно, у
            вас есть замечательная возможность продать робуксы через FunPay.
            Чтобы стать продавцом нашей биржи, следуйте следующим принципам:
            <ul style={{ listStyleType: "disc", paddingLeft: 20 }}>
              <li>
                Выставляйте на продажу только ту сумму, что есть у вас в
                наличии, чтобы вы смогли быстро передать игровую валюту клиенту.
              </li>
              <li>Вежливо отвечайте на вопросы потенциальных покупателей.</li>
              <li>
                Ответственно относитесь к своим обязанностям и выполняйте заказы
                в кратчайшие сроки.
              </li>
              <li>
                Покупатель должен получить столько робуксов, сколько он указал в
                заказе.
              </li>
            </ul>
            И помните, чем больше у вас довольных клиентов, тем выше шанс
            превратить своё хобби в отличный источник дохода. Присоединяйтесь к
            FunPay!
          </p>
        </div>
      </div>
      {popupOpen && (
        <Popup
          onClose={() => {
            setPopupOpen(false);
          }}
        />
      )}
    </>
  );
}
