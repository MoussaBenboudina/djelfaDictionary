import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { WORDS } from "../../type";
import Loading from "../loading";

const WordDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [word, setWord] = useState<WORDS | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const foundWord = data.find((item: WORDS) => item.id == id);
        if (foundWord) {
          setWord(foundWord);
        } else {
          setError("كلمة غير موجودة");
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("حدث خطأ أثناء تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };

    fetchWord();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!word) {
    return <div className="mt-20">الكلمة غير موجود</div>;
  }

  return (
    <div className="flex flex-col justify-center h-screen w-[350px] xl:w-[500px] text-md xl:text-xl p-4">
      <div className="flex gap-2">
        <h1 className="font-bold">{word.djelfaWord}</h1>
        <div>{word.description}</div>
      </div>
      <div>
        <h2 className="font-bold text-2xl text-pink-600 my-2">امثلة</h2>
        {word.examples.map((example: string, index: number) => (
          <div
            key={index}
            className="bg-gray-100  dark:bg-gray-900 py-2 px-8 m-2 rounded-md shadow-md"
          >
            {example}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordDetail;
