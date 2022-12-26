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
export default function FormsComponents() {
  const [acikRiza, setAcikRiza] = React.useState({
    open: true,
    accepted: false,
  });

  useEffect(() => {
    if (!acikRiza.accepted && !acikRiza.open) {
      Router.router?.back();
    }
  }, [acikRiza]);

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
        {/* <FormSteps  /> */}
        <div className="my-[10px]">
          <FormAlert
            text="Göndermiş olduğunuz form onaylanmıştır"
            status="confirmed"
          />
          <FormAlert
            text="Göndermiş olduğunuz form beklemede"
            status="pending"
          />
          <FormAlert
            text="Göndermiş olduğunuz form incelemede"
            status="inReview"
          />
          <FormAlert
            text="Göndermiş olduğunuz form reddedildi"
            status="rejected"
          />
        </div>
        <div className="mt-[30px]">
          <FirstForm />
        </div>
        <div className="mt-[30px]">
          <FormsListTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
