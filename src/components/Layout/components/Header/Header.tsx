import { ServerIcon } from '@heroicons/react/outline';
import { NextLinkHelper } from '../../../../Helpers/lincs/NextLinkHelper';
import { UserMenu } from './component/UserMenu';
import { user } from '../../../../constans/mocData';

const Header = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center rounded-t-2xl">
      <NextLinkHelper href={'/'}>
        <div className="flex items-center space-x-4">
          <ServerIcon className="w-12 h-12 text-blue-700" />
          <h1 className="text-2xl text-cyan-900 font-semibold tracking-wide">
            CStorage
          </h1>
        </div>
      </NextLinkHelper>

      <UserMenu user={user} />
    </div>
  );
};

export default Header;
