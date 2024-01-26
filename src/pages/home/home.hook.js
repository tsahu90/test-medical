/* eslint-disable */
import { useState, useEffect } from "react";
import moment from "moment";

const useHome = () => {
    const [ageRangeValue, setAgeRangeValue] = useState([0, 100]);
    const [patientList, setPatientList] = useState([]);
    const [filteredPatientList, setFilteredPatientList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [patientDetails, setPatientDetails] = useState({});

    useEffect(() => {
        getPatientList()
    }, []);

    useEffect(() => {
        handleSearch()
    }, [ageRangeValue]);

    const handleSearch = () => {
        let stateValue = patientList
        let patientListStateValue = [...stateValue];
        let selectedStartDate = ageRangeValue[0]
        let selectedEndDate = ageRangeValue[1]
        let endDate = new Date();
        endDate.setFullYear(endDate.getFullYear() - selectedStartDate);

        let startDate = new Date();
        startDate.setFullYear(startDate.getFullYear() - selectedEndDate);
        //console.log("startDate==>", moment(startDate).format("YYYY-MM-DD"))
        //console.log("endDate==>", moment(endDate).format("YYYY-MM-DD"))
        if (patientListStateValue.length > 0) {
            let filteredPatientList = patientListStateValue.filter(patient => patient.resource.birthDate > moment(startDate).format("YYYY-MM-DD") && patient.resource.birthDate < moment(endDate).format("YYYY-MM-DD"))
            setFilteredPatientList(filteredPatientList)
        }

    };

    const getPatientList = async () => {
        try {
            const response = await fetch("http://hapi.fhir.org/baseR4/Patient?_pretty=true", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            if (result) {
                let patientList = result.entry
                setPatientList(patientList)
                console.log("patientList:", patientList);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (event, newValue) => {
        setAgeRangeValue(newValue);
    };
    const handelModalOpen = (url) => {
        getPatientDetails(url)
        setModalOpen(true);
    };

    const handelClose = () => {
        setModalOpen(false);
        setPatientDetails({})
    };
    const getPatientDetails = async (url) => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            if (result) {
                let patientDetails = result
                setPatientDetails(patientDetails)
                console.log("patientDetails:", patientDetails);
            }
        } catch (error) {
            console.error("patientDetailsError:", error);
        }
    };

    return {
        handleChange,
        ageRangeValue,
        patientList,
        filteredPatientList,
        modalOpen,
        handelModalOpen,
        handelClose,
        patientDetails
    };
};

export default useHome;
