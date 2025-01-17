import {Fragment, useState} from 'react'
import {CheckCircleIcon} from '@heroicons/react/24/solid'
import {FaceFrownIcon, FaceSmileIcon, FireIcon, HandThumbUpIcon, HeartIcon, XMarkIcon,} from '@heroicons/react/20/solid'
import {Listbox, Transition} from '@headlessui/react'

import {Button} from '@/components/Button'

const activity = [
    {id: 1, type: 'joined the team', person: {name: 'Beep'}, date: '7d ago', dateTime: '2023-01-23T10:32'},
    {id: 2, type: 'earned the award', person: {name: 'Beep'}, date: '6d ago', dateTime: '2023-01-23T11:24'},
    {
        id: 3,
        type: 'commented',
        person: {
            name: 'Beep Boop',
        },
        comment: 'I beeped then I booped.',
        date: '3d ago',
        dateTime: '2023-01-23T15:56'
    },

    {id: 4, type: 'pledged', person: {name: 'Boop'}, date: '2d ago', dateTime: '2023-01-24T09:12'},
    {id: 5, type: 'left the team', person: {name: 'Beep'}, date: '6d ago', dateTime: '2023-01-23T11:03'},
]
const moods = [
    {name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500'},
    {name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400'},
    {name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400'},
    {name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400'},
    {name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500'},
    {name: 'I feel nothing', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent'},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function TeamActivityFeed() {
    const [selected, setSelected] = useState(moods[5])
    return (
        <>
            <ul role="list" className="space-y-6">
                {activity.map((activityItem, activityItemIdx) => (
                    <li key={activityItem.id} className="relative flex gap-x-4">
                        <div
                            className={classNames(
                                activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6',
                                'absolute left-0 top-0 flex w-6 justify-center'
                            )}
                        >
                            <div className="w-px bg-gray-200"/>
                        </div>
                        {activityItem.type === 'commented' ? (
                            <>
                                <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                    <div className="flex justify-between gap-x-4">
                                        <div className="py-0.5 text-xs leading-5 text-gray-500">
                                            <span
                                                className="font-medium text-gray-900">{activityItem.person.name}</span> commented
                                        </div>
                                        <time dateTime={activityItem.dateTime}
                                              className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                                            {activityItem.date}
                                        </time>
                                    </div>
                                    <p className="text-sm leading-6 text-gray-500">{activityItem.comment}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                    {activityItem.type === 'paid' ? (
                                        <CheckCircleIcon className="h-6 w-6 text-indigo-600" aria-hidden="true"/>
                                    ) : (
                                        <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"/>
                                    )}
                                </div>
                                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                                    <span
                                        className="font-medium text-gray-900">{activityItem.person.name}</span> {activityItem.type}
                                </p>
                                <time dateTime={activityItem.dateTime}
                                      className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                                    {activityItem.date}
                                </time>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            {/* New comment form */}
            <div className="mt-6 flex gap-x-3">
                <form action="#" className="relative flex-auto">
                    <div
                        className="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                        <label htmlFor="comment" className="sr-only">
                            Add your comment
                        </label>
                        <textarea
                            rows={2}
                            name="comment"
                            id="comment"
                            className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Add your comment..."
                            defaultValue={''}
                        />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                        <div className="flex items-center space-x-5">
                            <div className="flex items-center">
                                <Listbox value={selected} onChange={setSelected}>
                                    {({open}) => (
                                        <>
                                            <Listbox.Label className="sr-only">Your mood</Listbox.Label>
                                            <div className="relative">
                                                <Listbox.Button
                                                    className="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                          <span className="flex items-center justify-center">
                            {selected.value === null ? (
                                <span>
                                <FaceSmileIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true"/>
                                <span className="sr-only">Add your mood</span>
                              </span>
                            ) : (
                                <span>
                                <span
                                    className={classNames(
                                        selected.bgColor,
                                        'flex h-8 w-8 items-center justify-center rounded-full'
                                    )}
                                >
                                  <selected.icon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true"/>
                                </span>
                                <span className="sr-only">{selected.name}</span>
                              </span>
                            )}
                          </span>
                                                </Listbox.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Listbox.Options
                                                        className="absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                                                        {moods.map((mood) => (
                                                            <Listbox.Option
                                                                key={mood.value}
                                                                className={({active}) =>
                                                                    classNames(
                                                                        active ? 'bg-gray-100' : 'bg-white',
                                                                        'relative cursor-default select-none px-3 py-2'
                                                                    )
                                                                }
                                                                value={mood}
                                                            >
                                                                <div className="flex items-center">
                                                                    <div
                                                                        className={classNames(
                                                                            mood.bgColor,
                                                                            'flex h-8 w-8 items-center justify-center rounded-full'
                                                                        )}
                                                                    >
                                                                        <mood.icon
                                                                            className={classNames(mood.iconColor, 'h-5 w-5 flex-shrink-0')}
                                                                            aria-hidden="true"
                                                                        />
                                                                    </div>
                                                                    <span
                                                                        className="ml-3 block truncate font-medium">{mood.name}</span>
                                                                </div>
                                                            </Listbox.Option>
                                                        ))}
                                                    </Listbox.Options>
                                                </Transition>
                                            </div>
                                        </>
                                    )}
                                </Listbox>
                            </div>
                        </div>
                        <Button type="submit"> Comment </Button>
                    </div>
                </form>
            </div>
        </>
    )
}