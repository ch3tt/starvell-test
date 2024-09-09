import React, { useCallback, useState } from "react";
import SelectComponent from "./Select";
import { useDropzone } from "react-dropzone";
import cloud from "../images/upload_cloud.svg";
import Image from "next/image";

export default function Popup({ onClose }: { onClose: () => void }) {
  const [reportText, setReportText] = useState("");
  const onDrop = useCallback((acceptedFiles: any) => {
    setDroppedFile(acceptedFiles[0].name);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const [droppedFile, setDroppedFile] = useState<String | null>(null);

  return (
    <>
      <div className="popup-fs" onClick={onClose}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          className="popup__form"
        >
          <>
            <h2>Жалоба</h2>
            <div className="popup__form__block">
              <p>Причина жалобы</p>
              <SelectComponent
                thin
                callback={() => {}}
                title="Выберите причину жалобы"
                values={[
                  { title: "Причина 1" },
                  { title: "Причина 2" },
                  { title: "Причина 3" },
                ]}
              />
            </div>
            <div className="popup__form__block">
              <p>Опишите проблему</p>
              <div className="textarea-block">
                <textarea
                  placeholder="Введите ваш текст"
                  rows={3}
                  value={reportText}
                  onChange={(e) => {
                    setReportText(e.target.value);
                  }}
                  maxLength={200}
                />
                <section>
                  <p> {reportText.length}/200</p>
                </section>
              </div>
            </div>
            <div className="popup__form__block">
              <p>Доказательства</p>
              <div {...getRootProps()} className="drag-and-drop-block">
                <Image src={cloud} alt="" />

                {droppedFile ? (
                  <h4>{droppedFile}</h4>
                ) : (
                  <>
                    <h4>Выберите файл или перетащите его сюда</h4>
                    <p>JPEG или PNG до 5 MB</p>
                  </>
                )}
                <input
                  {...getInputProps()}
                  type="file"
                  name=""
                  onChange={() => {
                    ///
                  }}
                  id=""
                />
              </div>
            </div>
            <div className="popup-double-buttons">
              <button onClick={onClose} className="white-button button">
                Мне нужна поддержка
              </button>
              <button className="primary-button button" onClick={onClose}>
                Пожаловаться
              </button>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
