import styled, { keyframes } from "styled-components"
import { ifProp, palette, theme } from "styled-tools"

const S: any = {}

S.Section = styled.section`
  position: relative;
`

S.Wrapper = styled.div`
  width: 100%;
  background-color: ${palette('primary')};
  padding: 20px;
  border-radius: 8px;
  margin-top: -70px;
  color: ${palette('white')};
`

S.Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin: 0 0 20px;
`

S.Form = styled.div`
  display: flex;
  flex-direction: column;
  transition: all .3s ease;
  opacity: ${ifProp('hidden', '0', '1')};
  
  @media (min-width: ${theme('breakpoints.md')}) {
    flex-direction: row;
    align-items: flex-end;
  }
`

S.Input = styled.input`
  background-color: ${palette('white')};
  border-radius: 4px;
  color: ${palette('dark')};
  padding: 0 10px;
  height: 3.4rem;
  width: 100%;
  border: 1px solid ${palette('white')};
  &:focus {
    outline: none;
    border-color: ${palette('accent')};
  }

  @media (min-width: ${theme('breakpoints.md')}) {
    width: ${ifProp('zip', '120px', '100%')};
  }
`

S.Select = styled.select`
  background-color: ${palette('white')};
  border-radius: 4px;
  color: ${palette('dark')};
  padding: 0 10px;
  height: 3.4rem;
  width: 100%;
  border: 1px solid ${palette('white')};
  &:focus {
    outline: none;
    border-color: ${palette('accent')};
  }

  @media (min-width: ${theme('breakpoints.md')}) {
    width: 170px;
  }
`

S.Label = styled.label`
  display: block;
  font-size: 1.2rem;
`

S.Field = styled.div`
  flex-grow: ${ifProp('auto', '0', 1)};
  margin: 0 10px 20px;

  @media (min-width: ${theme('breakpoints.md')}) {
    margin-bottom: 0;
  }
`

S.Button = styled.button`
  height: 3.4rem;
  padding: 0 10px;
  color: ${palette('white')};
  background-color: ${palette('accent')};
  border-radius: 4px;
  border: none;
  width: 100%;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    filter: brightness(120%);
  }
`

S.Logos = styled.div`
  position: absolute;
  top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
`

S.Logo = styled.img`
  width: 30px;
  height: auto;
  margin: 0 5px;
  border-radius: 4px;
`

const pulse = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.1) }
  100% { transform: scale(1) }
`;

S.Loading = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  animation: ${pulse} .6s ease infinite;
`

export default S;