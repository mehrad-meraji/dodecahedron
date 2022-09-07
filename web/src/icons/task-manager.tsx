import { Icon } from '@chakra-ui/icons'

export const TaskManager = (props) => (
  <Icon viewBox="0 0 20 19" {...props}>
    <>
      <defs>
        <clipPath id="a">
          <path d="M5 0a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h4Z" />
        </clipPath>
        <clipPath id="b">
          <path d="M5 0a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h4Z" />
        </clipPath>
        <clipPath id="c">
          <path d="M5 0a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h4Z" />
        </clipPath>
        <clipPath id="d">
          <path d="M5 0a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h4Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="translate(7)">
        <path fill="#F7F7F6" d="M0 0h6v16H0V0z" />
      </g>
      <g clipPath="url(#b)">
        <path fill="#F7F7F6" d="M0 0h6v6H0V0z" />
      </g>
      <g clipPath="url(#c)" transform="translate(0 7)">
        <path fill="#867F7B" d="M0 0h6v10H0V0z" />
      </g>
      <g clipPath="url(#d)" transform="translate(14)">
        <path fill="#F7F7F6" d="M0 0h6v9H0V0z" />
      </g>
      <g clipPath="url(#d)" transform="translate(14 10)">
        <path fill="#867F7B" d="M0 0h6v9H0V0z" />
      </g>
    </>
  </Icon>
)
