import {
    useGetCultureLecturesQuery,
    useGetHrdLecturesQuery,
    useGetComputerLecturesQuery,
    useGetEnergyNewMaterialLecturesQuery,
    useGetIndustrialManagementLecturesQuery,
    useGetMachaincLecturesQuery,
    useGetMachatronicsLecturesQuery,
    useGetFusionLecturesQuery,
    useGetElectronicLecturesQuery,
    useGetDesignConstructLecturesQuery
  } from '../RTKquery/getGoodReviewLecturesAPI';

  const queryList = [
    useGetCultureLecturesQuery,
    useGetHrdLecturesQuery,
    useGetComputerLecturesQuery,
    useGetEnergyNewMaterialLecturesQuery,
    useGetIndustrialManagementLecturesQuery,
    useGetMachaincLecturesQuery,
    useGetMachatronicsLecturesQuery,
    useGetFusionLecturesQuery,
    useGetElectronicLecturesQuery,
    useGetDesignConstructLecturesQuery
  ]

  const useGetLectures = () => {
      const dataList = [];
      queryList.forEach((query)=>{
        let {data} = query();
        dataList.push(data);
        data = '';
      })
      return dataList;
  }

  export default useGetLectures;