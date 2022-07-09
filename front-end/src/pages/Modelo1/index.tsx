import { Container } from "@mui/system";
import React from "react";
import { ModifyButton } from "../../components/ModifyButton";
import NavBar from "../../components/Nav-bar";
import { Title_Subtitle } from "../../components/Title_Subtitle";

export function Modelo1() {
  return (
    <>
      <NavBar />
      <Container>
        <div className="h-[100vh]">
          <div className="flex flex-col justify-between h-[100vh] pb-12">
            <Title_Subtitle title={"teste"} subtitle={"compre"} />
            <div className="flex gap-7 justify-center items-center max500:flex-col">
              <div className="flex gap-7">
                <div>
                  <h3>396 mi</h3>
                  <p>Range (EPA est.)</p>
                </div>
                <div>
                  <h3>1.99 s</h3>
                  <p>0-60 mph*</p>
                </div>
                <div>
                  <h3>200 mph</h3>
                  <p>Top Speed†</p>
                </div>
                <div>
                  <h3>1,020 hp</h3>
                  <p>Peak Power</p>
                </div>
              </div>

              <ModifyButton textColor="#ffff" typeButton="outline">
                teste
              </ModifyButton>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
