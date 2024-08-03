export default function ResultList(props) {
  const { listData, searchedFor } = props;
  const { pageInfo, items } = listData;

  const showList = () => {
    return items.map(item => {
        const {thumbnails} = item.snippet;
        const {videoId} = item.id;

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
            </a>
          </div>
        );
    })
  }

  return (
    <>
      <h1>Result List for : {searchedFor}</h1>
      {showList()}
    </>
  );

}

const sampleResult = {
  kind: 'youtube#searchListResponse',
  etag: 'pNIhE3NJmvAVePLMzatuJ1JCMgU',
  nextPageToken: 'CAUQAA',
  regionCode: 'IN',
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'mbPdfzLhPtBreDHv-tlHoYpisP8',
      id: {
        kind: 'youtube#video',
        videoId: 'y57agpYcm-0',
      },
      snippet: {
        publishedAt: '2024-07-10T16:30:06Z',
        channelId: 'UC3jMepkLKF8y4iiwWmAB3RA',
        title:
          'Kaho Naa... Pyaar Hai - Hindi Full Movie - Hrithik Roshan, Ameesha Patel, Anupam Kher, Dalip Tahil',
        description:
          'Click here to Subscribe the channel : https://tinyurl.com/4adjwnv6 Sonia and Rohit love each ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/y57agpYcm-0/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/y57agpYcm-0/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/y57agpYcm-0/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Zee Studios',
        liveBroadcastContent: 'none',
        publishTime: '2024-07-10T16:30:06Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '0YihuRbNIbzXL4dRQWqrbfboo4Q',
      id: {
        kind: 'youtube#video',
        videoId: '49cSraYZKYA',
      },
      snippet: {
        publishedAt: '2024-07-10T16:00:06Z',
        channelId: 'UCcWi9YwnWUsR53jV0T4ObKA',
        title:
          'Kaho Naa... Pyaar Hai - Hindi Full Movie - Hrithik Roshan, Ameesha Patel, Anupam Kher, Dalip Tahil',
        description:
          'Click here to Subscribe the channel : https://bit.ly/3Q8uP6p Sonia and Rohit love each other but ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/49cSraYZKYA/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/49cSraYZKYA/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/49cSraYZKYA/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Zee Movies Hindi',
        liveBroadcastContent: 'none',
        publishTime: '2024-07-10T16:00:06Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'OxXZgo1qCHFda46MNcFBAmzCIeQ',
      id: {
        kind: 'youtube#video',
        videoId: 'hTepYTUidY0',
      },
      snippet: {
        publishedAt: '2022-11-10T05:05:27Z',
        channelId: 'UCwA6M1PmpghJCJaq0GbsikA',
        title:
          'Kaho Naa Pyaar Hai Song HD - Hrithik Roshan | Udit Narayan, Alka Yagnik | 90s Hits Hindi Songs',
        description:
          'Kaho Naa Pyaar Hai Song HD - Hrithik Roshan | Udit Narayan, Alka Yagnik | 90s Hits Hindi Songs Credits: Song Title: Kaho Naa ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/hTepYTUidY0/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/hTepYTUidY0/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/hTepYTUidY0/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'HoHo Entertainment',
        liveBroadcastContent: 'none',
        publishTime: '2022-11-10T05:05:27Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: '6jL7VdqguqYX673VhdnNkucC40g',
      id: {
        kind: 'youtube#video',
        videoId: 'MlVSPg-Rumo',
      },
      snippet: {
        publishedAt: '2024-07-08T14:32:23Z',
        channelId: 'UCxz2c50dBGCGDbbbZ8LesNQ',
        title:
          'Kaho Naa... Pyaar Hai - Hindi Full Movie - Hrithik Roshan, Ameesha Patel, Anupam Kher, Dalip Tahil',
        description:
          'Click here to Subscribe the channel : https://bit.ly/3pXq2Kt Sonia and Rohit love each other but ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/MlVSPg-Rumo/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/MlVSPg-Rumo/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/MlVSPg-Rumo/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'ZEE CINEMA',
        liveBroadcastContent: 'none',
        publishTime: '2024-07-08T14:32:23Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'uphH8Mj1Qsg6dxRj6cfdIOGshZg',
      id: {
        kind: 'youtube#video',
        videoId: '8nI1Dk7Jq78',
      },
      snippet: {
        publishedAt: '2017-01-11T05:54:07Z',
        channelId: 'UC_A7K2dXFsTMAciGmnNxy-Q',
        title:
          'कहो ना प्यार है | Kaho Naa Pyaar Hai | Lyrical | Hrithik Roshan |Amesha| Udit Narayan | Alka Yagnik',
        description:
          'Enjoy lyrics of the song ""Kaho Naa Pyaar Hai" in Hindi & English. The title track of the movie Kaho Naa Pyaar Hai was featurised ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/8nI1Dk7Jq78/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/8nI1Dk7Jq78/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/8nI1Dk7Jq78/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Saregama Music',
        liveBroadcastContent: 'none',
        publishTime: '2017-01-11T05:54:07Z',
      },
    },
  ],
};
