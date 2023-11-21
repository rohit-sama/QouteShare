import QouteCard from "@components/QouteCard";


const QouteCardList = ({ data, handleTagClick }) => {
    return (
      <div className="md:mt-16 mx-20 prompt_layout">
        {data.map((post) => (
          <QouteCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    );
  };

  export default QouteCardList;