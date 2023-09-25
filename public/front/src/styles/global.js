import { createGlobalStyle } from "styled-components";

export const DefaultGlobalStyle = createGlobalStyle`

:root {
  --primary-bg: #F8F8F8;
  --secondary-bg: #181818;
  --primary-header: #F4F4F4;
  --secondary-header: #151515;

  --brand-1: #00538F;
  --brand-2: #42B0FF;
  --brand-3: #B0A6F0;
  --brand-4: #EDEAFD;
  --brand-5: #FAFAFA;

  --gray-0: #000000;
  --gray-1: #242424;
  --gray-2: #495057;
  --gray-3: #808080;
  --gray-4: #ADB5BD;
  --gray-5: #CED4DA;
  --gray-6: #DEE2E6;
  --gray-7: #E9ECEF;
  --gray-8: #F5F5F5;
  --gray-9: #F8F9FA;
  --gray-10: #FDFDFD;

  --boxShdown: #00000025;

  --white-fixed: #FFFFFF;

  --alert-1: #CD2B31;
  --alert-2: #FDD8D8;
  --alert-3: #FFE5E5;

  --success-1: #18794E;
  --success-2: #CCEBD7;
  --success-3: #DDF3E4;

  --random-1: #E34D8C;
  --random-2: #349974;
  --random-3: #4529E6;
}

.dark-mode:root {
  --primary-bg: #171717;
  --secondary-bg: #1b1b1b;

  --brand-1: #00AAFF;
  --brand-3: #B0A6F0;
  --brand-4: #EDEAFD;
  --brand-5: #FAFAFA;

  --gray-0: #0B0D0D;
  --gray-1: #242424;
  --gray-2: #495057;
  --gray-3: #868E96;
  --gray-4: #ADB5BD;
  --gray-5: #CED4DA;
  --gray-6: #DEE2E6;
  --gray-7: #E9ECEF;
  --gray-8: #F5F5F5;
  --gray-9: #F8F9FA;
  --gray-10: #FDFDFD;

  --boxShadow: #00000025;

  --white-fixed: #FFFFFF;

  --alert-1: #CD2B31;
  --alert-2: #FDD8D8;
  --alert-3: #FFE5E5;

  --success-1: #18794E;
  --success-2: #CCEBD7;
  --success-3: #DDF3E4;

  --random-1: #E34D8C;
  --random-2: #349974;
  --random-3: #4529E6;
}

#main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13vh;
  height: 100vh;
  width: 100vw;


  #ace {
    .col-md-9 {
      margin-top: 0;
    }
    .col-md-12 {
      display: none;
    }
    .col-md-3 {
      display: none;
    }
  }
}

#root {
	width: 100%;
	height: 100vh;
	text-align: center;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

button{
  cursor: pointer;
}

li{
  list-style: none;
}

a{
  cursor: pointer;
}

.titleFilter{
  font-family: 'Lexend', sans-serif;
  font-size: 1.2rem;
  font-weight: 900;
  margin-bottom: 6px;
}

.labelForms {
  font-weight: 500;
  font-size: 0.88em;
  color: red
}
.titlesForms {
  align-self: flex-start;
  font-weight: 500;
  font-size: 1em;
  color: var(--gray-0)
}
`;
