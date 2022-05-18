// plAccess
const name = 'pgyer'
const size = [1024, 1024]
const paths = [
  [{ fill: '#15B092' }, 'M584.4,420.1c0.6,7,69.6,13.8,69.6,13.8s28.9,63.3,32.8,62.9c3.9-0.4,36-62.6,36-62.6s68.3-10.5,70.3-13.2 l-47.4-52.5c0,0,13.6-68.6,10.6-71c-3-2.5-65.2,30.1-65.2,30.1s-60.7-34.2-63.7-30.7s7,71.1,7,71.1S583.8,413.1,584.4,420.1z M892.9,333c-1.2-1.8-39.6,4.8-39.6,4.8s-26.4-28.3-28.5-27c-2.2,1.4-8.3,38.7-8.3,38.7s-34.4,15.1-35.2,18.9 c-0.9,3.8,34.5,19.1,34.5,19.1s4.6,38.2,6.7,38.7c2.1,0.5,29.6-26.8,29.6-26.8s37.9,6,39.4,5l-16.2-35.7 C875.3,368.6,894.1,334.9,892.9,333z M269.9,167.7c0,0-9.7,57.1-5.5,61.4c4.3,4.3,55.5-28.6,55.5-28.6s55,26,57.5,23.7 c2.5-2.4-10-60.7-10-60.7s41.1-44,41-46.8l-61.7-8.9c0,0-28.7-52.6-32.1-52.6c-3.5,0-28.1,55.2-28.1,55.2s-60.7,10.4-60.8,14.3 C225.4,128.5,269.9,167.7,269.9,167.7z M539.6,426.2l-94.7-23.3c0,0-38.2-85-43.5-85.6c-5.4-0.5-50.3,80.3-50.3,80.3 s-95.6,6.5-96.2,12.5c-0.6,6,63.6,72.9,63.6,72.9s-22,86-15.9,93.3c6.1,7.2,89.6-35.2,89.6-35.2s82.2,48.4,86.3,45.2 c4.1-3.2-8.2-94.6-8.2-94.6S539.4,430.6,539.6,426.2z M468.7,621.8c-2.8-0.6-32.2,39.8-32.2,39.8s-51.6-2.3-52.3,0.9 c-0.7,3.2,29.2,42.7,29.2,42.7s-17.5,44.6-14.7,48.8s50.3-13.4,50.3-13.4s40.8,30.8,43.2,29.3c2.4-1.5,1.9-51,1.9-51 s41-28.4,41.4-30.7l-49.1-18.1C486.3,670.1,471.5,622.4,468.7,621.8z M764.5,639.3c0,0,2.9-25.3,2.2-26.2L743,625.9 c0,0-23.5-10.2-24.7-9.4c-1.2,0.9,4.5,25.7,4.5,25.7s-18.4,19.1-17.4,20.4c1,1.3,26.5,3,26.5,3s11.3,21.6,13.9,22 c2.6,0.3,11.9-23.8,11.9-23.8s25.8-5.4,26-6.8C783.9,655.6,764.5,639.3,764.5,639.3z M235.8,477.5c0,0-21.7-41.1-24.5-40.1 c-2.9,0.9-20.9,43-20.9,43s-43.7,7.7-45.8,11.8c-2.1,4.2,33.7,32.6,33.7,32.6s-6,46.3-3.7,47.4c2.3,1.2,41.7-22.8,41.7-22.8 s41.5,18.3,43.5,17.5l-7.9-46.7c0,0,31.4-34.1,30.6-36.6C281.6,481.1,235.8,477.5,235.8,477.5z M603,99.6c0,0,3.6,41.5,5.2,42.7 l34.8-27.5c0,0,42.2,9.7,43.9,8c1.7-1.8-15.9-40.1-15.9-40.1s24-36,22-37.8c-2.1-1.9-44.7,2.7-44.7,2.7S622.4,16.1,618,16.3 c-4.4,0.2-11.7,41.7-11.7,41.7s-40.8,16.1-40.7,18.5C565.6,78.8,603,99.6,603,99.6z M516.9,120.1c62.7,0,113.5,49.5,113.5,110.5 s-50.8,110.5-113.5,110.5s-113.5-49.5-113.5-110.5S454.2,120.1,516.9,120.1z M212.2,403.2c44.8,0,81.2-35.4,81.2-79.1 S257.1,245,212.2,245c-44.8,0-81.2,35.4-81.2,79.1S167.4,403.2,212.2,403.2z M763.1,264.4c39.7,0,72-31.6,72-70.5 s-32.2-70.5-72-70.5c-39.7,0-72,31.6-72,70.5C691.2,232.8,723.4,264.4,763.1,264.4z M597.7,469.4c50.3,0,91,39.8,91,89 s-40.7,89-91,89s-91-39.8-91-89S547.4,469.4,597.7,469.4z M630.4,673.2c-20.8,0-37.7,16.3-37.7,36.4c0,20.1,16.9,36.4,37.7,36.4 s37.7-16.3,37.7-36.4C668.1,689.5,651.2,673.2,630.4,673.2z M796.8,474.3c-29.2,7.5-46.7,36.7-39,65.3s37.5,45.7,66.7,38.2 s46.7-36.7,39-65.3C855.9,483.9,826,466.9,796.8,474.3z M303.7,602.2c-27.1,0-49.1,21.6-49.1,48.1c0,26.6,22,48.1,49.1,48.1 s49.1-21.6,49.1-48.1C352.7,623.8,330.8,602.2,303.7,602.2z M459,0c25.3,0,45.9,19.7,45.9,44.1S484.3,88.2,459,88.2 s-45.9-19.7-45.9-44.1S433.7,0,459,0z M231.5,682.4c-1.2,1.1-2.6,2.5-4.3,4.3v-0.1c0,0-7.7,7.4-18.5,21.3 c-24.8,31.5-59.4,88.4-67.6,167.7c-2.3,21.4-2.5,44.4,0,68.9c0.8,8.5,1.9,17,3.3,25.9v0.1c0.1,0.6,0.4,1.1,0.5,1.7 c0.9,4.7,1.8,9.5,2.9,14.3c11.6,40.3,32.7,36.8,42,37.5c11.6,0.9,35.6-10.2,27.7-32.1c-44.4-162.9,55-257.2,62.5-265.6 C254.2,726.1,233.2,706.8,231.5,682.4z']
]

export default [name, size, paths]
