// solid icon
import psCaretDownData from './psCaretDown'
import psFolderData from './psFolder'
import psAddAltData from './psAddAlt'
import psConfirmData from './psConfirm'
import psRepositoryData from './psRepository'
import psRepositoryGroupData from './psRepositoryGroup'
import psMembersData from './psMembers'
import psFileData from './psFile'
import psLogData from './psLog'
import psTagData from './psTag'
import psSettingData from './psSetting'
import psMergeData from './psMerge'
import psCommitData from './psCommit'
import psBranchData from './psBranch'
import psClockData from './psClock'
import psTrashData from './psTrash'
import psTicketData from './psTicket'
import psStarData from './psStar'
import psClockRingData from './psClockRing'
import psPlayData from './psPlay'
import psCreditCardsData from './psCreditCards'
import psBookMarkFolderData from './psBookMarkFolder'
import psCommentData from './psComment'
import psPauseData from './psPause'
import psMoreData from './psMore'
import psNewFeatureData from './psNewFeature'
import psCheckboxData from './psCheckbox'
import psOverviewData from './psOverview'
import psContentData from './psContent'
import psBookData from './psBook'
import psMemberAltData from './psMemberAlt'
import psBellData from './psBell'
import psAddData from './psAdd'
import psHomeData from './psHome'
import psPieChartData from './psPieChart'
import psExclamationTriangleData from './psExclamationTriangle'
import psMeterData from './psMeter'
import psCalendarData from './psCalendar'
import psBoxData from './psBox'
import psAlarmData from './psAlarm'
import psChartData from './psChart'
import psCloudCheckData from './psCloudCheck'

// line frame icon
import plRepositoryData from './plRepository'
import plCodeFileData from './plCodeFile'
import plBranchData from './plBranch'
import plExpandData from './plExpand'
import plFileData from './plFile'
import plTrashData from './plTrash'
import plMergeData from './plMerge'
import plCopyData from './plCopy'
import plSafeData from './plSafe'
import plImportData from './plImport'
import plHelpData from './plHelp'
import plMemberData from './plMember'
import plSortDescData from './plSortDesc'
import plCommitData from './plCommit'
import plSearchData from './plSearch'
import plTagData from './plTag'
import plFilterData from './plFilter'
import plEditData from './plEdit'
import plAngleLeftData from './plAngleLeft'
import plSettingData from './plSetting'
import plChatData from './plChat'
import plBellData from './plBell'
import plForkData from './plFork'
import plUploadData from './plUpload'
import plUnderlineData from './plUnderline'
import plDownloadData from './plDownload'
import plSourceData from './plSource'
import plFullScreenData from './plFullScreen'
import plCloseData from './plClose'
import plShareData from './plShare'
import plFolderData from './plFolder'
import plStrikeData from './plStrike'
import plBoldData from './plBold'
import plCooperateData from './plCooperate'
import plImageData from './plImage'
import plFontData from './plFont'
import plConfirmData from './plConfirm'
import plAlignCenterData from './plAlignCenter'
import plAlignRightData from './plAlignRight'
import plAlignLeftData from './plAlignLeft'
import plUnknownFileData from './plUnknownFile'
import plUndoData from './plUndo'
import plMemoData from './plMemo'
import plAngleDownData from './plAngleDown'
import plMemberSettingData from './plMemberSetting'
import plRepairData from './plRepair'
import plScrollData from './plScroll'
import plMemberAltData from './plMemberAlt'
import plItalicData from './plItalic'
import plListData from './plList'
import plCalendarData from './plCalendar'
import plClockData from './plClock'
import plUpdateLogData from './plUpdateLog'
import plOrderListData from './plOrderList'
import plStarData from './plStar'
import plCheckboxData from './plCheckbox'
import plAddData from './plAdd'
import plAddAltData from './plAddAlt'
import plClockRingData from './plClockRing'
import plBookMarkFolderData from './plBookMarkFolder'
import plLocalizationData from './plLocalization'
import plBookData from './plBook'
import plSpeakerData from './plSpeaker'
import plDraftData from './plDraft'
import plTableData from './plTable'
import plCommentData from './plComment'
import plMemberInfoData from './plMemberInfo'
import plExitData from './plExit'
import plCheckData from './plCheck'
import plPickerData from './plPicker'
import plLinkData from './plLink'
import plAttachmentData from './plAttachment'
import plSettingAltData from './plSettingAlt'
import plContentData from './plContent'
import plKeyData from './plKey'
import plMenuCollapseData from './plMenuCollapse'
import plCloudUpData from './plCloudUp'

let warpper = function (name, size, path0, path1) {
  return {
    prefix: 'pg',
    iconName: name,
    icon: [size[0], size[1], [], 'e000', [path1, path0]]
  }
}

// solid icon
let psCaretDown = warpper(...psCaretDownData)
let psFolder = warpper(...psFolderData)
let psAddAlt = warpper(...psAddAltData)
let psConfirm = warpper(...psConfirmData)
let psRepository = warpper(...psRepositoryData)
let psRepositoryGroup = warpper(...psRepositoryGroupData)
let psMembers = warpper(...psMembersData)
let psFile = warpper(...psFileData)
let psLog = warpper(...psLogData)
let psTag = warpper(...psTagData)
let psSetting = warpper(...psSettingData)
let psMerge = warpper(...psMergeData)
let psCommit = warpper(...psCommitData)
let psBranch = warpper(...psBranchData)
let psClock = warpper(...psClockData)
let psTrash = warpper(...psTrashData)
let psTicket = warpper(...psTicketData)
let psStar = warpper(...psStarData)
let psClockRing = warpper(...psClockRingData)
let psPlay = warpper(...psPlayData)
let psCreditCards = warpper(...psCreditCardsData)
let psBookMarkFolder = warpper(...psBookMarkFolderData)
let psComment = warpper(...psCommentData)
let psPause = warpper(...psPauseData)
let psMore = warpper(...psMoreData)
let psNewFeature = warpper(...psNewFeatureData)
let psCheckbox = warpper(...psCheckboxData)
let psOverview = warpper(...psOverviewData)
let psContent = warpper(...psContentData)
let psBook = warpper(...psBookData)
let psMemberAlt = warpper(...psMemberAltData)
let psBell = warpper(...psBellData)
let psAdd = warpper(...psAddData)
let psHome = warpper(...psHomeData)
let psPieChart = warpper(...psPieChartData)
let psExclamationTriangle = warpper(...psExclamationTriangleData)
let psMeter = warpper(...psMeterData)
let psCalendar = warpper(...psCalendarData)
let psBox = warpper(...psBoxData)
let psAlarm = warpper(...psAlarmData)
let psChart = warpper(...psChartData)
let psCloudCheck = warpper(...psCloudCheckData)

// line frame icon
let plRepository = warpper(...plRepositoryData)
let plCodeFile = warpper(...plCodeFileData)
let plBranch = warpper(...plBranchData)
let plExpand = warpper(...plExpandData)
let plFile = warpper(...plFileData)
let plTrash = warpper(...plTrashData)
let plMerge = warpper(...plMergeData)
let plCopy = warpper(...plCopyData)
let plSafe = warpper(...plSafeData)
let plImport = warpper(...plImportData)
let plHelp = warpper(...plHelpData)
let plMember = warpper(...plMemberData)
let plSortDesc = warpper(...plSortDescData)
let plCommit = warpper(...plCommitData)
let plSearch = warpper(...plSearchData)
let plTag = warpper(...plTagData)
let plFilter = warpper(...plFilterData)
let plEdit = warpper(...plEditData)
let plAngleLeft = warpper(...plAngleLeftData)
let plSetting = warpper(...plSettingData)
let plChat = warpper(...plChatData)
let plBell = warpper(...plBellData)
let plFork = warpper(...plForkData)
let plUpload = warpper(...plUploadData)
let plUnderline = warpper(...plUnderlineData)
let plDownload = warpper(...plDownloadData)
let plSource = warpper(...plSourceData)
let plFullScreen = warpper(...plFullScreenData)
let plClose = warpper(...plCloseData)
let plShare = warpper(...plShareData)
let plFolder = warpper(...plFolderData)
let plStrike = warpper(...plStrikeData)
let plBold = warpper(...plBoldData)
let plCooperate = warpper(...plCooperateData)
let plImage = warpper(...plImageData)
let plFont = warpper(...plFontData)
let plConfirm = warpper(...plConfirmData)
let plAlignCenter = warpper(...plAlignCenterData)
let plAlignRight = warpper(...plAlignRightData)
let plAlignLeft = warpper(...plAlignLeftData)
let plUnknownFile = warpper(...plUnknownFileData)
let plUndo = warpper(...plUndoData)
let plMemo = warpper(...plMemoData)
let plAngleDown = warpper(...plAngleDownData)
let plMemberSetting = warpper(...plMemberSettingData)
let plRepair = warpper(...plRepairData)
let plScroll = warpper(...plScrollData)
let plMemberAlt = warpper(...plMemberAltData)
let plItalic = warpper(...plItalicData)
let plList = warpper(...plListData)
let plCalendar = warpper(...plCalendarData)
let plClock = warpper(...plClockData)
let plUpdateLog = warpper(...plUpdateLogData)
let plOrderList = warpper(...plOrderListData)
let plStar = warpper(...plStarData)
let plCheckbox = warpper(...plCheckboxData)
let plAdd = warpper(...plAddData)
let plAddAlt = warpper(...plAddAltData)
let plClockRing = warpper(...plClockRingData)
let plBookMarkFolder = warpper(...plBookMarkFolderData)
let plLocalization = warpper(...plLocalizationData)
let plBook = warpper(...plBookData)
let plSpeaker = warpper(...plSpeakerData)
let plDraft = warpper(...plDraftData)
let plTable = warpper(...plTableData)
let plComment = warpper(...plCommentData)
let plMemberInfo = warpper(...plMemberInfoData)
let plExit = warpper(...plExitData)
let plCheck = warpper(...plCheckData)
let plPicker = warpper(...plPickerData)
let plLink = warpper(...plLinkData)
let plAttachment = warpper(...plAttachmentData)
let plSettingAlt = warpper(...plSettingAltData)
let plContent = warpper(...plContentData)
let plKey = warpper(...plKeyData)
let plMenuCollapse = warpper(...plMenuCollapseData)
let plCloudUp = warpper(...plCloudUpData)

export {
  // solid icon
  psCaretDown, psFolder, psAddAlt, psConfirm, psRepository, psRepositoryGroup,
  psMembers, psFile, psLog, psTag, psSetting, psMerge, psCommit, psBranch,
  psClock, psTrash, psTicket, psStar, psClockRing, psPlay, psCreditCards,
  psBookMarkFolder, psComment, psPause, psMore, psNewFeature, psCheckbox,
  psOverview, psContent, psBook, psMemberAlt, psBell, psAdd, psHome, psPieChart,
  psExclamationTriangle, psMeter, psCalendar, psBox, psAlarm, psChart, psCloudCheck,

  // line frame icon
  plRepository, plCodeFile, plBranch, plExpand, plFile, plTrash, plMerge,
  plCopy, plSafe, plImport, plHelp, plMember, plSortDesc, plCommit, plSearch,
  plTag, plFilter, plEdit, plAngleLeft, plSetting, plChat, plBell, plFork,
  plUpload, plUnderline, plDownload, plSource, plFullScreen, plClose, plShare,
  plFolder, plStrike, plBold, plCooperate, plImage, plFont, plConfirm,
  plAlignCenter, plAlignRight, plAlignLeft, plUnknownFile, plUndo, plMemo,
  plAngleDown, plMemberSetting, plRepair, plScroll, plMemberAlt, plItalic,
  plList, plCalendar, plClock, plUpdateLog, plOrderList, plStar, plCheckbox,
  plAdd, plAddAlt, plClockRing, plBookMarkFolder, plLocalization, plBook,
  plSpeaker, plDraft, plTable, plComment, plMemberInfo, plExit, plCheck,
  plPicker, plLink, plAttachment, plSettingAlt, plContent, plKey, plMenuCollapse,
  plCloudUp
}
