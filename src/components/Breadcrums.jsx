
const Breadcrums = ({heading,link}) => {
  return (
    <div className="header h-[340px] bg-[#222222] pt-40 pb-24">
        <div className="pl-44">
          <h2 className="text-5xl text-white font-bold font-oswald uppercase">
            {heading}
          </h2>
          <div className="text-lg font-oswald  font-medium breadcrumbs text-white">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li className="text-orange-400">
                <a>{link}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Breadcrums