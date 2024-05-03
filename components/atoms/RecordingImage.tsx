'use client'
import { SVGProps } from "react";
import styled from "styled-components";
import { CustonListItemIcon } from "./CustonListItemIcon";
import Image from 'next/image'

const StyledMain = styled.main`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const MainLayout = styled.div`
  font-size: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 30%;
  gap: 20px;
  .svg-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const ImageLayout = styled.div`
  font-size: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 70%;
  gap: 20px;
  .svg-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const CustomSVG = styled.svg`
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  `;
const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;


interface Props extends SVGProps<SVGSVGElement> {
  width?: number,
  height?: number,
  viewBox?: string,
}

const RecordingImage = (props: Props) => {
  return <StyledMain>
    <ImageLayout>
      <div className="svg-container hover:scale-[1.15] border border-[#fff] rounded-lg overflow-hidden">
        <Image
          src='/assets/images/calls-recording-section.png'
          className=''
          width={904}
          height={376}
          alt="Picture of the author"
        />
      </div>
    </ImageLayout>
    <MainLayout>
      <h1>Leaping AI calls dashboard</h1>
      <h3>Call analitics improved</h3>
      <StyledUl>
      <StyledLi>
          <CustonListItemIcon/>
          <p>{'Attendance on your customers inquiries boosted'}</p>
        </StyledLi>
        <StyledLi>
          <CustonListItemIcon/>
          <p>Tone of voice and consistency and kind approach held friendly and connetion assured</p>
        </StyledLi>
        <StyledLi>
          <CustonListItemIcon/>
          <p>Metrics handy after each interaction to countinously improve client satisfaction</p>
        </StyledLi>
      </StyledUl>
    </MainLayout>
  </StyledMain>
};

export { RecordingImage };
