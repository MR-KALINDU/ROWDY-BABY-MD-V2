/**
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : sᴜʜᴀɪʟ-ᴍᴅ
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.8
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/
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
