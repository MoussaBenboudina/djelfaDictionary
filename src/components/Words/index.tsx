import { useEffect, useState } from "react";
import { WORDS } from "../../type";
import Search from "../search";
import Loading from "../loading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SearchWord = () => {
  console.log("search Words ");
  const [words, setWords] = useState<WORDS[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchWord]);

  useEffect(() => {
    if (searchWord) {
      const filteredData = words.filter((e) =>
        e.djelfaWord.toLowerCase().includes(searchWord.toLowerCase())
      );
      setWords(filteredData);
    }
  }, [searchWord, words]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-20 flex flex-col items-center relative">
          <Search setSearchWord={setSearchWord} />
          {words.length > 0 ? (
            words.map((word, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                key={word.id}
              >
                <Link
                  to={`/words/${word.id}`}
                  className="flex gap-8 text-xl w-[90%] lg:w-[600px] xl:w-[800px] justify-center items-center m-2 p-4 rounded shadow-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-pink-500 dark:hover:bg-pink-500 transition-colors duration-500 ease-in-out"
                >
                  <div>{word.djelfaWord}</div>
                  <div>{word.translation}</div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              هذه الكلمة غير موجودة
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchWord;
