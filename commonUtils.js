"use strict";

function formatMoneyWithCents(value)
{
    return (value * 1.0).toLocaleString(undefined, { maximumFractionDigits: 2 })
}

function formatMoney(value)
{
    return (value * 1.0).toLocaleString(undefined, { maximumFractionDigits: 0 })
}

function onMoneyFieldEnter(event)
{
    if(event.target.underlyingValue !== undefined)
    {
        event.target.value = event.target.underlyingValue;
    }
}

function onMoneyFieldExit(event)
{
    const field = event.target;

    const value = field.value.replace(/[^0-9]/, "") * 1;

    field.underlyingValue = value;
    field.value = formatMoney(value);
}

function registerMoneyFormatter(field)
{
    field.addEventListener("focus", onMoneyFieldEnter);
    field.addEventListener("blur", onMoneyFieldExit);
    field.addEventListener("input", () => {
        field.underlyingValue = field.value;
    });

    field.value = field.value.replace(/[^0-9]/, "") * 1;
    field.dispatchEvent(new Event("blur"));
}

function onRangeEvent(dest, src, callback) 
{
    dest.value = src.value;
    dest.dispatchEvent(new Event("blur"));
    callback();
}

function registerRangePair(input0, input1, callback) 
{
    input0.addEventListener("input", () => onRangeEvent(input1, input0, callback));
    input1.addEventListener("input", () => onRangeEvent(input0, input1, callback));
}
