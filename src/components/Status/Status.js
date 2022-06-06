import React, { useState } from "react";
import "./Status.css";
function Status() {
  return (
    <div className="rsticketrspro-tickets-list">
      <div className="clearfix"></div>

      <div
        action="/index.php/az/az"
        method="post"
        name="adminForm"
        id="adminForm"
      >
        <table
          className="adminlist table table-striped table-condensed tablesaw tablesaw-stack"
          data-tablesaw-mode="stack"
        >
          <thead>
            <tr>
              <th
                id="rst_head_item_no"
                width="1%"
                align="center"
                className="hidden-phone hidden-tablet"
              >
                #
              </th>

              <th
                id="rst_head_date"
                nowrap="nowrap"
                align="center"
                className="center hidden-phone"
              >
                <a
                  // href="#"
                  // onClick={}
                  className="hasPopover"
                  title="Tarix"
                  data-content="Çeşidləmək üçün bu sütuna basın"
                  data-placement="top"
                >
                  Tarix<span className="icon-arrow-down-3"></span>
                </a>{" "}
              </th>

              <th
                id="rst_head_last_reply"
                nowrap="nowrap"
                align="center"
                className="center hidden-phone hidden-tablet"
              >
                <a
                  // href="#"
                  // onClick={}
                  className="hasPopover"
                  title="Sonuncu cavab"
                  data-content="Çeşidləmək üçün bu sütuna basın"
                  data-placement="top"
                >
                  Sonuncu cavab
                </a>{" "}
              </th>

              <th
                id="rst_head_ticket_code"
                nowrap="nowrap"
                align="center"
                className="center"
              >
                <a
                  // href="#"
                  // onClick={}
                  className="hasPopover"
                  title="Kod"
                  data-content="Çeşidləmək üçün bu sütuna basın"
                  data-placement="top"
                >
                  Kod
                </a>{" "}
                <a
                  // href="#"
                  // onClick={}
                  className="hasPopover"
                  title="Telefon"
                  data-content="Çeşidləmək üçün bu sütuna basın"
                  data-placement="top"
                >
                  Telefon
                </a>{" "}
              </th>

              <th
                id="rst_head_customer"
                nowrap="nowrap"
                align="center"
                className="center"
              >
                <a
                  // href="#"
                  // onClick={}
                  className="hasPopover"
                  title="Müraciət edən"
                  data-content="Çeşidləmək üçün bu sütuna basın"
                  data-placement="top"
                >
                  Müraciət edən
                </a>{" "}
              </th>

              <th
                id="rst_head_status"
                nowrap="nowrap"
                align="center"
                width="1%"
                className="center hidden-phone"
              >
                <a
                  // href="#"
                  // onClick={}
                  className="hasPopover"
                  title="Status"
                  data-content="Çeşidləmək üçün bu sütuna basın"
                  data-placement="top"
                >
                  Status
                </a>{" "}
              </th>

              <th
                id="rst_head_sort"
                nowrap="nowrap"
                align="center"
                className="center hidden-phone hidden-tablet"
              >
                <a
                  // href="#"
                  // onClick={}
                  className="hasPopover"
                  title="İcrasına həyata keçirir"
                  data-content="Çeşidləmək üçün bu sütuna basın"
                  data-placement="top"
                >
                  İcrasına həyata keçirir
                </a>{" "}
              </th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>

        <input type="hidden" name="boxchecked" value="0"></input>
        <input type="hidden" name="filter_order" value="date"></input>
        <input type="hidden" name="filter_order_Dir" value="desc"></input>
        <input type="hidden" name="limitstart" value="0"></input>

        <input type="hidden" name="task" value="ticket.bulkupdate"></input>
      </div>
    </div>
  );
}

export default Status;