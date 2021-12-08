import React from "react";
import { ADDRESS, CITY, POSTAL_CODE, COUNTRY } from "../../constants";
export default (props) => {
    return (
        <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Postal Code
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Country
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                {props.place ? (
                  <input onChange={(e) => props.change(e,ADDRESS) } defaultValue={props.delivery.address}  maxLength="100" className={`appearance-none block w-full bg-gray-200 text-gray-700 mb-4 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${ props.errors.address ? "border-red-500": "border-gray-200"}`} id="grid-address" type="text" placeholder="2A/12 Mopi drive, LA, Pluto"/>
                ) : props.delivery && props.delivery.address && props.delivery.address}
                  {props.place && props.errors.address &&  (
                    <p className="text-red-500 text-xs italic">{props.errors.address}</p>
                    )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {props.place ? (
                  <input onChange={(e) => props.change(e,CITY) } defaultValue={props.delivery.city}  maxLength="10" className={`appearance-none block w-full bg-gray-200 text-gray-700 mb-4 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${ props.errors.city ? "border-red-500": "border-gray-200"}`} id="grid-city" type="text" placeholder="Lagos"/>
                ) : props.delivery && props.delivery.city && props.delivery.city}
                {props.place && props.errors.city &&  (
                    <p className="text-red-500 text-xs italic">{props.errors.city}</p>
                    )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
              {props.place ? (
                  <input onChange={(e) => props.change(e,POSTAL_CODE) } defaultValue={props.delivery.postalCode}  maxLength="8" className={`appearance-none block w-full bg-gray-200 text-gray-700 mb-4 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${ props.errors.postalCode ? "border-red-500": "border-gray-200"}`} id="grid-postal" type="text" placeholder="028293"/>
                ) : props.delivery && props.delivery.postalCode && props.delivery.postalCode}
                {props.place && props.errors.postalCode &&  (
                    <p className="text-red-500 text-xs italic">{props.errors.postalCode}</p>
                    )}
              </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap ">
              <div className="text-sm text-gray-900">
                {props.place ? (
                  <input onChange={(e) => props.change(e,COUNTRY) } defaultValue={props.delivery.country}  maxLength="10" className={`appearance-none block w-full bg-gray-200 text-gray-700 mb-4 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${ props.errors.country ? "border-red-500": "border-gray-200"}`} id="grid-country" type="text" placeholder="Pluto"/>
                ) : props.delivery && props.delivery.country && props.delivery.country}
                {props.place && props.errors.country &&  (
                    <p className="text-red-500 text-xs italic">{props.errors.country}</p>
                    )}
              </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


    )
}