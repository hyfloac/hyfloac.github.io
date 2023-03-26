"use strict";

function formatMoneyWithCents(value)
{
    return (value * 1.0).toLocaleString(undefined, { maximumFractionDigits: 2 })
}

function formatMoney(value)
{
    return (value * 1.0).toLocaleString(undefined, { maximumFractionDigits: 0 })
}
