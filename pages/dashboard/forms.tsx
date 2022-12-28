import ComponentHeading from "@components/BoxHeading/BoxHeading";
import FirstForm from "@components/Forms/BasvuruForms/FirstForm";
import FormAlert from "@components/Forms/FormAlert/FormAlert";
import FormsListTable from "@components/Forms/FormsListTable/FormsListTable";
import FormSteps from "@components/Forms/FormSteps/FormSteps";
import DashboardLayout from "@components/Layouts/DashboardLayout";
import SozlesmeModal from "@components/SozlesmeModal/SozlesmeModal";
import React, { useEffect } from "react";
import { loremIpsum } from "lorem-ipsum";
import Router from "next/router";
import { v4 } from "uuid";
import SecondForm from "@components/Forms/BasvuruForms/SecondForm/SecondForm";
export default function Forms() {
  const [acikRiza, setAcikRiza] = React.useState({
    open: false,
    accepted: true,
  });

  useEffect(() => {
    if (!acikRiza.accepted && !acikRiza.open) {
      Router.router?.back();
    }
  }, [acikRiza]);

  const [selectedStep, setSelectedStep] = React.useState(Number(localStorage.getItem("selectedStep")) || 1);

  useEffect(() => {
    localStorage.setItem("selectedStep", selectedStep.toString());
  }, [selectedStep]);

  const [forms, setForms] = React.useState([
    {
      step: 1,
      component: () => <FirstForm />,
    },
    {
      step: 2,
      component: () => (
        <SecondForm selectedStep={2} setSelectedStep={setSelectedStep} />
      ),
    },
    {
      step: 3,
      component: () => (
        <SecondForm selectedStep={3} setSelectedStep={setSelectedStep} />
      ),
    },
    {
      step: 4,
      component: () => (
        <SecondForm selectedStep={4} setSelectedStep={setSelectedStep} />
      ),
    },
  ]);

  return (
    <DashboardLayout>
      {acikRiza.open && (
        <SozlesmeModal
          content={
            "<h1 className='text-[40px]'>Hasta Açık Rıza Metni ve Hasta Aydınlatma Metni</h1>" +
            loremIpsum({
              count: 50,
              format: "html",
              units: "sentences",
              paragraphUpperBound: 5,
            })
          }
          closeWithValue={(val: boolean) =>
            setAcikRiza({ open: false, accepted: val })
          }
        />
      )}
      <div className="bg-[white]">
        <FormSteps
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
        />
        <div className="my-[10px]">
          <FormAlert
            text="Göndermiş olduğunuz form onaylanmıştır"
            status="confirmed"
          />
          <FormAlert
            text="Göndermiş olduğunuz form beklemede"
            status="pending"
          />
        </div>

        <div className="mt-[30px]">
          {forms.map((form) => {
            if (form.step === selectedStep) {
              return form.component();
            }
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
