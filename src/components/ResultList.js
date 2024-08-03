import '../styles/resultList.scss';

export default function ResultList(props) {
  const { listData, searchedFor } = props;
  const { pageInfo, items } = listData;

  const showList = () => {
    return items.map((item) => {
      const { snippet, id } = item;
      const { channelTitle, publishTime, thumbnails } = snippet;
      const { videoId } = id;

      return (
        <div className="list" key={videoId}>
          <a href={`https://www.youtube.com/watch?v=${videoId}`}>
            <img
              src={thumbnails.default.url}
              width={thumbnails.width}
              height={thumbnails.height}
              alt={item.snippet.title}
            />
            <strong>{item.snippet.title}</strong>
            <p>{item.snippet.description}</p>
            <strong className="more-info">
              <span>Channel : {channelTitle}.</span> Published on : {publishTime}
            </strong>
          </a>
        </div>
      );
    });
  };

  return (
    <>
      <h1>Result List for : {searchedFor}</h1>
      {showList()}
    </>
  );
}
