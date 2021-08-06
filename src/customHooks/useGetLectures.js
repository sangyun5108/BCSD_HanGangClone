import { useGetLecturesQuery} from '../RTKquery/getGoodReviewLecturesAPI';

  const useGetLectures = () => {
      const dataLists = [
        {title:'교양',data:useGetLecturesQuery(10).data},
        {title:'HRD',data:useGetLecturesQuery(9).data},
        {title:'기계',data:useGetLecturesQuery(1).data},
        {title:'메카',data:useGetLecturesQuery(3).data},
        {title:'산경',data:useGetLecturesQuery(7).data},
        {title:'에신화',data:useGetLecturesQuery(6).data},
        {title:'컴공',data:useGetLecturesQuery(2).data},
        {title:'융합',data:useGetLecturesQuery(8).data},
        {title:'전전통',data:useGetLecturesQuery(4).data},
        {title:'디ㆍ건',data:useGetLecturesQuery(5).data}
      ]
      return dataLists;
  }

  export default useGetLectures;