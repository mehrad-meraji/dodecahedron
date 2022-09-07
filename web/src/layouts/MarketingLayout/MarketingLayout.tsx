type MarketingLayoutProps = {
  children?: React.ReactNode
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return <section className={'bg-ice-900 min-h-screen'}>{children}</section>
}

export default MarketingLayout
