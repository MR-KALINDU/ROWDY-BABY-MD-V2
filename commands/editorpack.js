const { smd,getBuffer, lang, botpic,photoEditor, prefix, Config } = require('../lib')

const util = require('util');
const fs = require('fs-extra');
const axios = require('axios')
const fetch = require('node-fetch');
const {TelegraPh} = require('../lib/scraper')



let cap =  Config.caption || "";


cmd({ pattern: "ad", category: "editor", filename: __filename,  desc: "add view pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "jail", category: "editor", filename: __filename,  desc: "jail pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "uncover", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "clown", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "mnm", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "pet", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "greyscale", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "invert", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "blur", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//============================================================================
cmd({ pattern: "drip", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "colorify", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "gun", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
cmd({ pattern: "wanted", category: "editor", filename: __filename,  desc: "pic Editor."},async(Suhail, msg, text , { cmdName}) => { await photoEditor(Suhail, msg , cmdName , cap); })
//=============================================================================
